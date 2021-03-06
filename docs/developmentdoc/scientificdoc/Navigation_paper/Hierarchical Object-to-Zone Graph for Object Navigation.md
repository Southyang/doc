---
title: Hierarchical Object-to-Zone Graph for Object Navigation
date: 2022-07-14 13:51:17
permalink: /pages/2c29d1/
---
# Hierarchical Object-to-Zone Graph for Object Navigation

[paper](https://arxiv.org/abs/2109.02066)

[code](https://github.com/sx-zhang/HOZ)

## Abstract

对象导航的目标是根据在未知场景中获取的视觉信息，来达到预期目的。过去的研究通常通过实现深度模型训练出一个智能模型来预测实时动作。但在未知环境中，当目标对象不是以自我为中心的视图时，由于缺乏足够的指引，智能模型可能无法做出正确的判断。在本文中，我们提出了一种分层对象区域图，从粗粒度到细粒度来引导智能模型；同时还提出了一种在线学习方法用来根据新环境中的实时观察来更新HOZ。特别地，HOZ图由场景点、区域点和对象点组成。通过预先学习的HOZ图、实时观察和目标，智能模型可以不断规划出从一个区域到另一个区域的最优路径。在预测路径中，下一个潜在区域被视为子目标，也被输入到深度强化学习模型中进行动作预测。我们的方法在AI2-Thor模拟器上进行了评估。除了广泛地使用 SR 和 SPL 评估指标，我们也提出了一个新的侧重于有效动作率的SAE评估指标。实验结果证明了我们所提出的方法的有效性和效率。相关代码放在[这里](https://github.com/sx-zhang/HOZ.git)。

## 1. Introduction

视觉导航任务需要智能模型来实现指定的目标，传统的方法通常需要空间布局信息，例如在可见环境中可以轻易获取的环境地图。因此，如何在不可见环境中有效实现到目标的导航变得有挑战性。

通过以自我为中心观察的视觉输入，之前的工作[31,29,30]通过最大化奖励学习深度强化学习策略。这些工作的核心挑战是对不可见环境的泛化[40]，尤其是当目标不在视线内。因此，最近更多的研究[4,11]尝试嵌入先验知识，例如对象图和关系图，用来改善导航模型的泛化能力。尤其是Yang等人[43]构建一个对象到对象的图，它提供相关对象作为定位目标对象的辅助信息。他们的对象图太过笼统，无法应用在特殊环境中。另外，Du等人[11]提出了学习对象关系图，比一般对象图更适合测试环境。上述方法均侧重于在目标不可见时构建面向对象图为导航提供一些线索。然而，由于对象关系和空间布局在不同的环境中通常不一致，上述方法的泛化能力仍然有限。

以增强导航模型的泛化能力为动机，我们从两个方面进行了这项研究：1）学习适用于各种环境的自适应空间知识表示； 2) 结合学习到的知识来引导在不可见环境中的导航。 此外，在我们的知识中考虑了更大面积的区域，将其表示为区域。 与物体相比，更大的区域更容易被智能模型观察到。 因此，我们导航引导的核心思想是区域。

在本文中，我们提出了分层对象区域 (HOZ) 图来捕获用于对象导航的场景布局的先验知识（参见图 1）。在训练期间，因为同一场景类别中的房间具有相同的空间结构，我们根据所有场景构建一个通用的 HOZ 图。每个场景节点对应一个按房间分类的HOZ图，其区域节点是通过匹配和合并房间级HOZ图获得的。对于每个按房间分类的 HOZ 图，每个区域节点代表一组相关对象，每个区域边缘模拟两个区域的相邻概率。然后，我们在拟真模拟器 AI2-Thor [21] 中通过深度强化学习训练区域到动作 LSTM 策略。对于每一次训练，预学习的 HOZ 图有助于规划从当前区域到目标区域的最佳路径，从而将路径上的下一个潜在区域推导出作为子目标。子目标嵌入图卷积网络 (GCN) 以预测动作。考虑到不同的环境具有不同的区域布局，我们还提出了一种在线学习机制来根据当前不可见环境更新==一般学习的 HOZ 图 general learned HOZ graph==。通过这种方式，初始的 HOZ 图将朝着当前环境的特定布局演变，并帮助智能模型成功导航。请注意，更新仅适用于单次训练，并且每个训练都从初始 HOZ 图开始。除了广泛使用的评估指标成功率（SR）和成功路径长度加权（SPL）之外，我们还提出了一种新的评估指标，即成功行动效率加权（SAE），它考虑了导航动作进入SR的效率。我们的实验表明，HOZ 图在很大程度上优于基线。总之，我们的贡献如下：

- 我们建议学习分层对象区域（HOZ）图，该图捕获先验知识以引导具有更简单子目标的对象导航智能模型。
- 我们提出了一个新的评估指标，名为“行动效率加权成功”(SAE)。
- 通过将HOZ 图集成到区域到行动策略中，导航性能可以在SR、SPL 和SAE 指标中显着提高。

<img src="https://store.southyang.cn/robot/navigation/navigation1/navigation1_1.png"  />

图 1. 使用 HOZ 图进行对象导航的概述。 一开始，智能模型位于当前区域（区域 6，蓝色），目标 FloorLamp 属于目标区域（区域 4，红色）。 HOZ 图规划了一条实时最优路径（zone6 - zone1 - zone2 - zone4）。 那么智能模型的下一个子目标是 zone1（绿色）。 同样，智能模型不断更新子目标，直到它到达目标。 请注意，每种颜色都表示智能模型可以观察到相似视图的特定位置和方向。



## 2. Related Work

**基于几何的导航：**传统的导航方法通常使用地图作为参考，无论是预先构建的还是在视觉导航期间同步构建的。 [18, 4] 利用基于度量的地图来感知环境，并且 [12] 在智能模型运动期间不断更新概率棋盘表示。 相比之下，[36,6,5]采用粗粒度拓扑图，用节点显示语义特征、边缘推理空间关系， [37, 38] 都集成了基于度量的地图和拓扑地图来改进移动机器人导航， [25]构建了一个经验图来处理长期的表现变化。 此外，[14]采用置信图作为空间存储器。 我们的 HOZ 图作为先验知识来帮助在不可见环境中导航，并不依赖于特定地图

**基于学习的导航：** 深度学习在端到端的定位、探索等方面得到了普及[14, 36]。作为早期的尝试，[27] 采用神经网络在室内导航中建立走廊跟随者模型。如今，许多研究转向强化学习（RL）来帮助智能模型做出行动决策[35,4,17]。为了提高泛化能力，[44,43,41] 都采用了 Actor-Criticmodel [30]。此外，[7] 在模仿学习中，使用内在覆盖奖励来学习探索策略。 [24]训练任务生成器和元学习器 meta-learner来学习可迁移的元技能 meta-skills。 [8]使用带有概率框架的生成模型来有益于两个观测值的相似度计算。 [36, 2] 提出了一种航路点导航来找到更简单的子目标。 [32]利用语义信息来促进更深入的理解。同时，[13]提出了一种基于存储的策略。他们将每次观察嵌入到存储中，并在三个视觉导航任务中执行这种时空数据的存储。 [28] 提出了一个可达性估计器，它为导航器提供了一系列目标观察结果。这一系列工作主要将策略网络视为黑盒并通过 RL 对其进行训练，而我们的 HOZ 图包括允许可解释导航的对象、区域和场景由粗到细输入。

**目标驱动导航：**这种导航是出于主观目的而进行的，主要通过自然语言指令或目标图像进行。它可以分为 PointGoal 导航 [14, 4] 和 ObjectGoal导航 [29, 13, 40, 32, 43, 41]。特别是，有时目标可能会呈现为图像 [5, 44]。我们的工作重点是在室内不可见环境中进行对象导航。 [40] 提出了一种自适应视觉导航方法，通过元强化学习帮助智能模型在不可见环境中学习。 [11] 提出了一种对象表示图来学习不同对象类别之间的空间相关性，并使用模仿学习来训练智能模型。内存增强的试验策略网络用于检测死锁情况并在测试期间提供额外的操作指导。最近的工作已将知识图谱应用于图像分类 [26]、分割 [45]、零样本识别 [39] 和导航 [43, 41]。 [41] 提出了贝叶斯关系记忆，它在训练期间捕获房间到房间的环境先验布局，以产生用于语义目标视觉导航的子目标。 [43]通过提取视觉基因组[22]中对象类别之间的关系来建立对象到对象图。在我们的工作中，我们进行在线学习分层对象区域（HOZ）图作为对象导航的先验知识，提供更普遍的区域信息。

<img src="https://store.southyang.cn/robot/navigation/navigation1/navigation1_2.png"  />

图 2. **模型概述。**我们的模型由分层对象区域 (HOZ) 图和区域动作 LSTM 组成。 给定目标对象和当前观察，智能模型首先识别场景类别，定位当前区域，并根据 HOZ 图推断下一个子目标区域。 HOZ 图根据在不可见环境的观察在每个时间戳进行更新。区域动作LSTM 学习基于 HOZ 图提供的连接信息来预测有效动作。



## 3. Preliminary Notation

考虑一组环境 *Q* 和对象 *P*，在每个导航训练中，智能模型被初始化到一个随机位置  $l=\lbrace x,z,θ_{yaw},θ_{pitch} \rbrace$ 在环境 *q* *∈* *Q* 中。 *x, z* 表示平面坐标，$θ_{yaw} $ ,  $ θ_{pitch}$ 表示（智能模型的）偏航角和俯仰角。 在每个时间戳 *t*，智能模型学习一个策略函数 *π* (*a_t|o_t, p*)，基于第一人称视角 *o_t* 和目标对象 *p* *∈* *P*预测一个动作 *a_t* *∈ A* .离散动作空间 *A* = *{MoveAhead, RotateLeft, RotateRight, LookDown,LookUp, Done}*。 请注意，动作 *Done* 是由智能模型本身判断的，而不是由环境通知的。 对象导航任务的成功需要智能模型最终捕获并接近目标对象（小于阈值）。



## 4. Hierarchical Object-to-Zone (HOZ) Graph

我们的目标是在不可见环境且没有精确地图的情况下将智能模型导航到给定的目标。因此，此类任务中的一个巨大挑战是定位对象。以前的工作[11,40,43]直接将目标对象嵌入作为指导动作预测的目标。然而，如果没有关于未知环境的先验知识，通常很难规划一条有效的路径。那些工作中的智能模型可能一开始就找不到路径，导致做出一些意义不大的动作，比如经常旋转和倒车。为了提供更强的指导，我们的导航模型考虑了目标对象可能位于的更广范围的区域，称为区域。每个区域通常由一组相关对象组成。例如，微波炉、炊具和水槽通常出现在同一个区域。因此，导航到微波可能首先需要定位这样的区域。由于在不可见环境中无法获得精确的地图信息，因此如何收集合适的区域信息并构建分层对象区域（HOZ）图仍然具有挑战性。因此，我们从可见场景开始构建 HOZ 图（第 4.1 节），然后在不可见场景中导航时自适应地更新它（第 4.2 节）。我们从以下层次结构中考虑区域。我们的环境由几个场景组成，比如卧室、客厅、厨房等，每个场景包含几个房间。在每个房间 *i* *∈ {*1*,* 2*, . . . , n}* ，我们得到 ==按房间分类的 zoom-wise== HOZ图 *Ω_i (V_i , E_i)*，其区域节点是通过对自我中心观察特征进行聚类得到的，边定义为两个区域的相邻概率（追溯到每个包含对象的共现概率）。然后我们合并这些按场景分组的按房间分类的HOZ 图，得到按房间分类的HOZ 图 *G_s (V_s, E_s)*。所有按房间分类的HOZ 图都具有相同的结构，并构成了我们最终的 HOZ 图（第 4.1 节）。

```
# 算法 1 场景级 HOZ 图构建

输入： K ：区域数量

输入： (Room1, . . . , Roomn) ：相同的场景的房间

创建房间级 HOZ 图数组 Ω

for i <- 1 to n do

    智能体在 ROOMi 随机探索获取到的特征和位置 [(f1, l1), · · · ,(fd, ld)]

    创建图 Gr(Vr, Er)

    (C1, · · · , CK) ← K均值聚类 K-Means(f1, · · · , fd, K)

    Vr ← 聚类中心 cluster centers (C1, · · · , CK)

    Er ← 公式 1 计算边

    Ωi ← Gr(Vr, Er) 将房间级 HOZ 图放入 Ω

end for

创建场景级 HOZ 图 Gs(Vs, Es)

初始化  Gs(Vs, Es) ← Ω1

for i <- 2 to n do

    创建加权二分图 Gb (Vb, Eb)

    Vb ← Vs (Gs 的所有节点), Vi (Ωi 的所有节点)

    ω(Eb) ← 公式 2 计算相似度

    完美匹配 Ψ∗ ← Kuhn-Munkres( ω(Eb) ) （二分图完美匹配）

    更新 Gs ← Avg(Gs, Ωi, Ψ∗) 根据参考图 3

end for

输出：场景级 HOZ 图 Gs(Vs, Es)
```



### 4.1. HOZ Graph Construction

#### 4.1.1 Room-wise HOZ graph

类似的场景（例如“客厅”）可能由常见的对象和对象布局组成 [16, 46]。 例如，提到客厅，我们的脑海中可能会出现一个由沙发、枕头和桌子组成的区域，或者一个由电视机和电视柜组成的区域。 在搜索对象时，人类倾向于首先定位对象最有可能出现的典型区域。 在我们的工作中，我们这样的地方标记为区域和嵌入区域，以便引导智能模型。为了获得这些具有代表性的区域，我们对房间周围的视觉特征进行采样并对其进行聚类。

在特定房间 *i* 中，我们首先让智能模型探索房间以收集一组视觉元组特征 (*f, l*)，其中 *f∈ R^(N×1)* ，是==一组 bag-of-objects== 由 Faster RCNN [34] 获得的对象向量，表示当前视图中出现的对象。需要注意的是，我们使用 0 和 1 组成的==一组==向量来表示对象类别。如果当前视图包含许多属于同一类别的对象，我们只记录一次。 *N* 表示对象类别的数量，$l=\lbrace x,z,θ_{yaw},θ_{pitch} \rbrace$ 表示在 **Section 3** 中定义的观察位置。然后我们对特征 *f* 进行 K-Means 聚类以获得 *K* 区域，在==按房间分类的==HOZ 图 *Ω_i (V_i , E_i)* 中形成区域节点。我们使用 *v_k* 和 *δ* (*v_k*) 来表示第 *k* 个区域节点及其嵌入特征。嵌入特征表示聚类中心，计算公式为 $δ(v_k) = \frac {1}{zone_k} \ sum_{(f_γ,l_γ)∈zone_k} f_γ$，其中 *zone_k* 是 K-Means 之后的一组聚类视觉元组特征 (*f, l*)，*| zone_k|* 是元素编号。 *δ* (*v_k*) 的每个维度的值显示了区域层和对象层之间的连接关系（图 2），代表了属于 *zone_k* 的对象的共现频率。

区域层中的边 *e* (*v_k*, *v_j* )，表示两个区域相邻的概率，可以计算如下：

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm1.png)

其中 *ε* 是超参数阈值。 然后我们使用所有节点特征来识别场景类别。 对于每个房间 *i*，我们构建一个按房间分类的HOZ 图 Ω*i* (*V_i* , *E_i*)

#### 4.1.2 Scene-wise HOZ graph

为了获得==按场景分类的==HOZ 图，我们按场景类别对所有按房间划分的 HOZ 图进行分组。以一个场景为例，我们可以得到按房间划分的集合 Ω ={*Ω_1 (V_1, E_1), . . . ，Ωn (V_n, E_n)* }。由于区域编号 *K* 是固定的，因此每个按房间划分的 HOZ 图具有相同的结构，以便以后进行匹配和合并。考虑到直接计算所有 room-wise HOZ 节点的最大匹配成本很高，我们提出了成对完美匹配，每次在两个图上合并，直到所有图合并到最后一个。 *Ω_i (V_i , E_i)* 和 *Ω_i+1 (V_i+1, E_i+1)* 图之间的匹配可以可视为加权二分图匹配。我们构造一个二分图*G_b = (V_i ∪ V_i+1, E^b)*，其中 *V_i* 是 *Ω_i* 中设置的节点，*|V_i|=|V_i+1|*， *E_b* 代表所有全连接边。一个完美的匹配是找到一个子集 *Ψ* *⊆* *E^b* ，其中每个节点恰好有一个边缘事件。最大完美匹配满足 $Ψ^* = argmax \sum_{e^b∈Ψ}ω(e^b)$ 。其中 *e^b* *≡* *e^b* (*v_k, v_j)* 表示边匹配节点 *v_k* 和 *v_j* , *v_k* *∈* *V_i*, *v _j* *∈* *V_i*+1。权重函数 *ω*(*e^b*) 计算两个节点的相似度为

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm2.png)

同时，有*d* (*δ_k*, *δ_j* ) 定义为

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm3.png)

其中 *δ_k* *≡* *δ* (*v_k*), *δ_j* *≡* *δ* (*v_j* )。 *α* 是平衡两个距离的参数。 我们利用 Kuhn–Munkres 算法 [23, 33] 来解决这个完美的最大匹配问题。 一旦得到完美匹配，我们将匹配的节点和边平均合并，如图3所示。新生成的边是新节点所涉及的节点之间的原始边的平均值。 这样，我们就可以每次两两融合按房间划分的HOZ graphs，最终得到合成图，定义为按场景划分的HOZ graph *G_s* (*V_s*, *E_s*）。 算法 1 总结了场景 HOZ 图的构建。 所有按场景划分的 HOZ 图构成了我们最终的 HOZ 图。

<img src="https://store.southyang.cn/robot/navigation/navigation1/navigation1_3.png"  />

图 3. **匹配和合并。** 左侧部分显示了使用 Kuhn–Munkres 算法在加权二分图上的完美最大匹配。 右侧部分显示了将两个按房间划分的HOZ 图匹配并合并为一个新图的平均计算。 例如，两个节点（红色）匹配，并与平均池合并（写为 *Avg*）。 相应地，这些节点之间的边与平均池合并。

### 4.2. HOZ Graph Updating and Embedding

#### 4.2.1 Zone Updating and Embedding

使用所有训练数据，我们可以获得可见环境的==通用== HOZ 图 *G* (*V, E*)。 由于不同的环境有不同的布局，特别是在新的不可见环境中，很难从头构建一个精确的图。 因此，我们首先学习一个通用的 HOZ 图，然后提出一种在线学习方法，根据智能模型的实时视图更新当前区域节点。 这样，初始的 HOZ 图将向当前环境演变。 请注意，区域更新仅适用于一次训练，并且每次训练都从初始 HOZ 图开始。

通过对象检测，智能模型获得了==一组==特征 *f_t ∈ R^(N×1)*，用于在时间戳 *t* 出现在以自我为中心的视图 *o_t* 中的对象类别 . 根据视觉特征*f_t*、目标物体*p* *∈ P* 和HOZ图*G*(*V,E*)，智能模型计算当前区域*Z_c*， 目标区域 *Z_t* 和子目标区域 *Z_sub*，将在第 5.1 节中详细说明。 这些区域指示向量 *Z_c*, Z_t*, Z_sub* *∈* R*^(K×*1) 是仅激活代表性区域的独热编码。 提出的 HOZ 图 *G* (*V, E*) 嵌入了 GCN。 在时间 *t* = 0 时，输入矩阵 $δ(V^0)∈R^{K×N}$ 表示所有区域节点 *V* 的嵌入特征。 那么 *δ* (*V* ^*t*) 将基于 *f_t* 进行更新，可以表示为

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm4.png)

其中 *λ* 是一个可学习的参数，它决定了当前观察情况对==一般== HOZ 图的影响。 在[20]之后，我们对边*E*进行归一化并获得*E*^。 使用更新的区域节点 *δ* (*V ^ t*)，相邻关系 *E*^，我们的 GCN 输出节点级表示 *H_z* *∈* R^*(K**×**N)* 作为区域嵌入

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm5.png)

其中*σ* (*·*) 表示 ReLU 激活函数，*W_z* *∈* R*^(N**×**N)* 是 GCN 层的参数。 然后我们将编码后的向量 *HzTZsub* 作为区域层的输出，告知智能模型下一个子目标区域及其与其他区域的相对位置。

#### 4.2.2 Object Embedding

在[11]之后，我们建立了以对象为节点、对象之间的关系为边的对象层，并用GCN对其进行编码。 对于当前以自我为中心的观点，我们可以得到检测特征 $F_t = \lbrace f_t^b,f_t^s,f_t^v \rbrace$ ，其中 $f_t^b∈R^{N×4}$ 为边界框位置，为置 $f_t^s∈R^{N×1}$信度得分， $f_t^v∈R^{N×512}$ 是物体的视觉特征。 如果同时出现多个属于同一类别的实例，则选择检测器提供的置信度得分最高的实例。 定义 $X_o=[f_t^b,f_t^s,p]∈R^{N×6}$ 作为 GCN 的输入，其中 *p* *∈* R^*(N ×1)* 是表示目标对象的独热编码。 GCN 输出

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm6.png)

邻接矩阵 *A* 和 GCN 网络参数 $W_o∈ R^{6×N}$ 都需要学习。 然后我们将 $H_o f_t^v$ 集成为对象嵌入，它提供对象级信息。



## 5. Navigation Policy

### 5.1. Zone Localization and Navigation Planning

**当前区域**  我们将当前视图的==一组==向量*f_t*与预先学习的HOZ图*G*（*V，E*）中的节点进行比较，并将最相似的节点作为当前区域，可以表述为

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm7.png)

其中 $χ^K (·)$ 是一个指标，它产生一个独热编码 $χ^K(i) = [x_1, . . . x_K]^T$，其中 $x_i = 1，x_{j≠i} = 0$。*d* (*·*) 在公式 3 中定义。 然后 HOZ 图由当前区域 *Z_c* 和实时特征 *f_t* 更新（公式 4）。

**目标区域**  我们将目标物体出现概率最高的节点作为目标区域。

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm8.png)

**子目标区域**  为了将智能模型从当前区域导航到目标区域，我们搜索具有最大连接概率的路径。 如果边具有较高的值，则两个相关区域更有可能相邻，以便智能模型可以轻松到达。 此外，当目标区域远离当前区域或在当前视图中不可见时，可能无法很好地引导智能模型。 因此，我们将这条路径上从当前区域开始的第二个子区域作为子目标区域，它提供了下一步的移动信息。 我们的目标是找到一个最优的最大连接路径 $Γ = \lbrace v_{r0} , v_{r1}, . . . , v_{rT} \rbrace$ 其中 *τ_i* *∈ {*1*, . . . , K}* 表示节点索引，*v*_r0 表示当前区域，*v__τT* 表示目标区域，因此沿路径的连接概率最大化为：

![](https://store.southyang.cn/robot/navigation/navigation1/navigation1_paradigm9.png)

在得到 *Γ^∗* 之后，我们可以得到子目标区域 $Z_{sub} = χ^K (τ_1^*)$。 每当当前区域发生变化时，网络将自适应地重新规划最佳路径和子目标区域。

<img src="https://store.southyang.cn/robot/navigation/navigation1/navigation1_4.png"  />

图 4. **测试环境中的可视化。**黑色箭头代表旋转。 智能模型的轨迹用绿色和蓝色箭头表示，其中绿色是开始，蓝色是结束。

### 5.2. Policy Learning

**动作策略**  传统方法 [40, 11, 43, 44] 基于当前观察学习策略 $π (a_t|o_t, p)$。 在我们的工作中，我们学习了 区域到动作 LSTM 动作策略 $π_z(a_t |S_t, p)$，其中 *S_t* 是当前观察 *o_t*、子目标区域嵌入 $H_z^TZ_{sub}$ 和对象嵌入 $H_of_t^v$ 的联合表示。 在 [44, 29] 将此任务表述为强化学习问题之后，我们通过Asynchronous Advantage Actor-Critic (A3C) 算法 [30] 优化 LSTM，该算法通过最小化导航损失 *L_nav* 来学习策略函数和价值函数使奖励最大化。 策略函数输出*a*_t，表示每次动作的概率，价值函数用于训练策略网络。

**完成提醒**  为了提醒智能模型在遇到目标对象时及时停止，我们提出了完成提醒。 结合物体检测置信度 $f_t^s$ 和目标物体*p*，我们用 $βp^Tf_t^s$ 对*a_t* 进行加权，以表示结束动作的效果（*β* 是一个可学习的参数）。 这样，我们就可以得到最终的动作输出*a*^_*t*。



## 6. Experiments

### 6.1. Experiment Setup

### 6.2. Implementation Details

### 6.3. Evaluation Metrics

### 6.4. Ablation Study

### 6.5. Comparisons to the State-of-the-art



## 7. Conclusions

我们提出了分层对象到区域（HOZ）图，它捕获了普遍区域中对象的先验知识。配备 HOZ 的智能模型能够更新先验知识、定位目标区域并规划区域到区域的路径。我们还提出了一个新的评估指标，称为行动效率加权的成功 (SAE)，用于衡量行动的效率。实验结果表明，我们的方法在 SR、SPL 和 SAE 指标上大大优于基线。

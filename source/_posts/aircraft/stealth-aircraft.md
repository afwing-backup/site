---
title: 善隐者，上隐于九天——热点战机隐身性能分析
tags:
categories:
  - 飞机图介
  - 中国
  - 歼击机
date: 2013-04-10 08:00:00
updated: 2013-04-10 08:00:00
---

![](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/title.jpg)

> 原作者：中华暖风
> 原始链接：http://www.afwing.vip/aircraft/stealth-aircraft.html

<!-- more -->

## 一、 前言

　　【孙子兵法】云：“善守者藏于九地之下，善攻者动于九天之上，故能自保而全胜也。”现代化战争各种探测手段层出不穷，谁能先敌发现和攻击往往就决定了谁能掌握主动，而谁更能隐蔽谁的战场生存力就越强。要想赢必须要善于隐藏自保，先立于不败之地，而后出其不意的进攻，夺取胜利。

　　对战机而言，隐身能力的高低已成为提高生存力，获取不对称作战优势的必不可少的重要手段。现代战机最主要考虑的隐身措施是缩减本机的雷达反射、红外辐射特征，减少被发现的概率，结合电子对抗及主动对消等手段，以及合理的规避战术，战场生存力可以大幅提高。在隐身技术领域，美国是毫无争议的领头羊，其 B-1B、F-117、B-2、F-22、F-35 等隐身战机的设计理念和技术应用是各国竞相研究效仿的目标。

　　本文重点从外形和结构化隐身技术等方面，对比分析几款热点战机的隐身性能，并尝试根据一些公开的研究测试结论给出量化的数据推导，所得结论不代表型号真实数据，仅供军迷参考。这些机型主要包括目前被划为四代战机的美制 F-22、中国 歼-20 和俄罗斯 T-50，文章的最后针对近期网络热点，附加点评中国 歼-10 隐身改型以及法国阵风两款 3.5 代机型的准隐身性能。

## 二、 基础概念说明

　　雷达波隐身主要包括外形隐身技术和隐身材料、结构的应用，红外隐身主要是降低战机发动机和表面气动热点红外辐射的技术，此外战机本身安装的各种雷达、电子设备也会向外辐射电磁波，每个辐射源习惯上被称为一个射频孔径，这些信号不加掩饰的话很容易被对手截获发现，通过对各孔径进行综合和优化，可以降低被截获概率，提高隐身能力。

　　在展开对比分析之前，需要先了解几个基本概念：

　　1.在电磁辐射能量范畴，电子学上为了便于度量能量的大小，采用了等效雷达散射截面积（RCS）和米制的度量概念，一个物体的 RCS 等效为同一电磁场内系统可测得相同散射能量的标准球体径向横截面积的大小，比如某物体 RCS 为 1m²，即等同于半径是 0.564m 的金属球（几何横截面积 1m²）所反射的 RCS 效果；

　　2.为便于对比辐射能量相对强弱，引入电子学中的分贝（dB）概念，取两个能量值之比的 10 倍对数值，比如 3 分贝表示算术比值大 1 倍，10 分贝表示大 10 倍，20 分贝表示大 100 倍，反之分贝为负值则表示减小为对应的几分之一。当以 1 平方米作为参照值时，可定义绝对值度量 dBm²，如 3dBm² 就意味着 2m² 的 RCS，以便于理解和表达；

　　3.一些常见的物体形状，雷达波反射强度从高到低依次为：腔体>三面垂直角体>两面直角体>矩形平面>圆柱体>球体等，隐身设计上既要兼顾气动和机内有效容积，又要尽量避免采用反射较强的结构外形。

## 三、 雷达波隐身技术

　　对常用的 Ku、X、C、S、L 波段的雷达波，由于波长远小于飞机各部件尺寸，通常可以采用几何光学近似法来对飞机各部件的 RCS 进行估算，但考虑耦合问题的复杂性，目前即使应用超算能力的情况下，复杂物体的 RCS 也还不能绝对精确计算出来，只能无限趋近，必须经过实测才能真正获得比较准确的结果。这类波段在战机上的散射形式重点要考虑的有三种：镜面反射、绕射和行波反射，其中镜面反射占主导。**雷达波隐身技术，就是针对战机的关键战术任务需要和重点姿态，平衡气动和机内有效容积等各种因素，合理设计外形和应用吸波材料，将威胁最大的方位和俯仰角范围内的 RCS 降到最低。**

　　图 1 是典型的三代战机幻影 2000 沿水平方位的 RCS 强度分布，对于威胁最大的正前方小角度范围，主要包括来自腔体、边缘等的反射、绕射等，峰值各在 5~8dBm²，机身前向反射和机翼后缘行波反射很小，约 -8~-12dBm² 以下；侧前方主要是机翼前缘和部分机身表面的镜面反射，各约 7~8dBm²；正侧方向立尾反射最强，达到 30dBm²，机身其次，约 24dBm²；后部尾喷口边缘绕射和腔体反射最强，接近 20dBm²。未作隐身处理的雷达舱、进气道、座舱是前向主要反射源，其 RCS 贡献分别占 40%、31.5%、23%，其他部位的反射、行波、爬行波散射等合计只占 5.5%。这里也应注意，即使行波和爬行波反射不占主导，其累积 RCS 绝对值仍可能达到 1m² 的程度，对隐身战机而言同样不可忽视。

![图 1、幻影 2000 沿水平方位角 RCS 强度分布](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/1.jpg)

　　目前应用的雷达波隐身措施主要有 6 种：

　　1.将无法避免的直线边缘、平面相对主要威胁方位倾斜，把入射波反射到无威胁的方向，比如菱形或凹凸曲面机身、菱形机翼、倾斜立尾、斜切翼尖等，F-117 是最直观应用这种思路的典型设计；

　　2.弱散射部件占位或遮挡强散射部位。例如机翼下反遮挡、翼身融合体占位、飞翼设计等，都能起到明显降低 RCS 的作用；

　　3.消除角反射器效应，最典型的设计是倾斜双立尾和倾斜机身表面，改变相互间的直角夹角，也可以在纵横向布局上尽量分散错开有垂直关系的平面，减少交叉重叠区域面积。比如常规布局的立尾和平尾间很难避免纵向位置重叠，只能采取倾斜立尾等措施；歼-20 的鸭翼、主翼和立尾纵向分散布置，从侧向隐身来说是有利的；

　　4.将全方位分散的波峰调整合并为有限的几个方向，并优化反射角度和波峰宽度，也就是现在常说的平行设计原则，一般思路是把其他部件反射波峰向主翼波峰靠拢。普通双立尾战机的各翼面前后缘合计可能产生多达 24 个不同方向的散射波峰，必须进行整合优化。歼-20 进气道唇口内倾角和垂尾后缘与主翼波系并不重合，整机波系略多于 F-22；

　　5.尽量减少或消除表面台阶、缝隙，将开口缝隙斜置或锯齿化，倾角也参考主翼波峰，以削弱主要威胁方向的行波或爬行波反射；

　　6.在关键部位局部采用吸波材料。吸波材料大面积使用的话会带来重量、强度等诸多问题，但局部补得好则能起到画龙点睛的效果。对一些无法回避的强散射点，例如进气道唇口及腔体内表面、机翼前后缘和翼尖、菱形或凹凸曲面机身侧面棱边、机头（雷达罩框架边缘）和尾部喷口连接部、活动翼面连接部及各类开口缝隙等，都应在设计上重点关注。

　　这些措施很多人可能已经有所了解，对边缘平行合并波系的设计等网上分析已经很多，笔者在此不再推导。但对凹凸曲面机身、机翼和翼身融合体占位、倾斜立尾、双斜切进气道、行波反射的 RCS 量化特性和吸波材料的局部使用方法并不常见行诸于文，本文予以重点说明。

### （一）凹凸曲面机身

　　实际应用证明，类似 F-117 那样多棱边机身设计并不成功，棱边的绕射问题会增加隐身措施复杂度，更为成功的是如图 2 所示几种带单棱边的凹凸曲面机身的外形，其中凹面尖劈角（a、b）在侧面正负 15 度角内隐身效果最好（见图 2），RCS 最多可降低 18~25dB，凸面（c）最差，降低 13~19dB 左右。由于凹曲面机身的这一优势，加之很容易与翼身融合一并实现，因此被广泛采用。凸曲面机身由于内容积最大，主要用于机头雷达罩（对雷达波辐射的畸变也最小）和延续的座舱段，以及各类独立尾撑。对比 F-22、歼-20 和 T-50 的机头段，我们可以发现 F-22 的侧面倾角略大于 歼-20，棱线尖劈角也相近，而 T-50 的五边形截面设计下半部分倾角偏小，但底部较浅，隐身效果方面应相差不多。

![图 2、几种成功应用的低 RCS 机身外形](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/2.jpg)

　　座舱是机身前向的一大腔体散射源，普通玻璃座舱盖无法阻止雷达波进入杂乱无章的座舱内，从而形成强烈腔体散射。采用金或铟锡金属镀膜和低 RCS 外形设计的座舱盖可以有效减少雷达波的透入，并将大部分雷达波反射到低威胁方向。对座舱内设备表面的倾斜和简洁化设计，包括关键部位涂覆吸波材料也能够进一步减低 RCS，通常来说削弱 25dB 是可以做到的。歼-20 上我们已经看到明确采用了金属膜低 RCS 座舱盖，座舱内设备外形也符合隐身设计要求，T-50 目前尚未采用，但有消息报道其生产技术已经掌握，预计在后续验证机上会应用。

### （二）弱散射占位

　　接下来分析一个较少提及的重要隐身技术概念——弱散射占位作用。以机翼和翼身融合体为例，进行适当隐身处理后在侧面会减为弱散射源，当我们用其占住机身某段后，由于遮挡作用，这部分机身的 RCS 被替代为机翼或翼身融合体的弱散射值，从而大幅降低侧面 RCS，这就是弱散射占位的基本原理。实测效果如图 3 所示，其中两个实验体分别为翼身融合体和常规机翼+机身组合，可看出翼身融合体侧面主要威胁角内 RCS 平均低 15dBm² 以上。

![图 3、机翼+机身（A+B）和翼身融合体（C+D）占位对侧面 RCS 影响](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/3.jpg)

　　机翼本身的外形隐身处理措施主要包括斜切翼尖和端面削尖。在机翼平面上，除前后缘法线方向以外的其他方位 RCS 很低，一般在 -26~-45dBm² 左右（水平极化波回波较强）。但对于平直翼尖正对的法线方向，端面也偏钝直的情况下，0.6m 的翼尖弦长就可能造成 1m² 的 RCS，因此必须缩短平直翼尖的弦长（比如斜切），并对端面削尖，一些可偏转翼面如襟副翼侧端也同样要采取削尖措施。经修形后，在正对翼尖法线方向的 RCS 可下降 16~25dB，如涂覆吸波材料将进一步降低。机翼略有上下反时，侧面 RCS 变化基本可忽略，除边缘法线方向外机翼的 RCS 基本可抑制在 -30~-40dBm² 范围，属于典型的弱反射部件。歼-20 翼尖平直，弦长约 1.4m，如图 4，只做了端面削尖未斜切缩短弦长，与 F-35 相似，虽然翼尖超薄，但还未达隐身修形的最佳效果。究其原因，估计与气动效果平衡有关，后续改进其实可以考虑略为加长翼展再作斜切处理。

![图 4、歼-20 机翼隐身修形和气动布局等综合分析（图片来自网络）](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/4.jpg)

　　从隐身角度，采用 RCS 更低的翼身融合体是必然的，为便于分析比较通常采用占位比的概念，即被翼身融合体有效占位的机身段长和机身全长的比值。也可以机身（从机头到发动机喷口）中轴线的中点为分界，分别定义前后机身的占位比。比如 F-22 的前机身基本无机翼和大边条，占位比是 0，而后机身主翼、尾翼与机身融合良好，占位比达到 1，整机占位比为 0.5。当采用凹凸曲面机身结合翼身融合体占位设计时，类似 F-22 和 歼-20 这样的战机侧向 RCS 可以相对抑制 20dB 甚至更低（未计入立尾影响），而 B-2 这类飞翼型设计整机占位比为 1，侧向隐身效果更佳。也正是基于这个原因，目前飞翼已成为了国际上下一代战机气动布局的重点研究方向。

　　大后掠角的三角翼根弦很长，是除飞翼布局外占位效果最佳的，同时类似大黄蜂和 FC-1 的大边条也可等同于机翼或翼身融合体的占位作用。良好的占位需要满足几个设计原则：首先机身侧面棱线必须比较平滑地与前后翼面连接，同时棱边的尖劈角应尽量不超过 45 度，最好小于 15 度，二者的散射强度因此可能相差 10dB 左右；其次，融合体凹面和机翼根截面所占的机身表面弧段应大于凸面弧段，以优化占位效果；最后，根据作战要求，选择上、下单翼布局，比如中低空空战为主的选择上或偏上单翼，对地面进攻为主的选择中下单翼，使得曲面选择有所侧重，降低最大威胁方向 RCS。此外，机身棱边和边条相对于侧视角的倾斜角度较小，易产生较高的镜面反射 RCS，除减小棱边截面尖劈角外，还应采取吸波结构抑制反射，这点在 F-22 等战机上有应用，歼-20、T-50 亦当不例外。

![图 5、歼-20 与 T-50 侧面翼身融合占位比（图片来自网络）](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/5.jpg)

　　对于 歼-20 和 T-50，我们把符合上述原则的占位段，以及不完全符合但有一定弱反射占位效果的不完全占位段（姑且这样称谓）做一比较，如图 5 所示。歼-20 由于凹凸曲面机身、棱线和大边条设计、翼身融合设计等都符合占位条件，前机身占位比 0.38，后机身为 0.86，整机占位比 0.62，尾撑、腹鳍段不完全满足占位条件，但也形成对发动机舱和喷口的遮挡，占比 0.14，且机翼有下反和扭转，对机身遮挡效果好。T-50 前机身有效占位比 0.19，后机身为 0.69，整机 0.44，其中前部边条下表面的电子干扰舱凸起较大，机身下半部以及后机身不太符合凹凸曲面机身和翼身融合设计要求，均属不完全占位段，占 比0.245，机翼无下反或扭转。综合比较，在不计尾翼和腹鳍 RCS 的情况下，歼-20 侧面 RCS 降低效果略优于 F-22 和明显优于 T-50，由于糟糕的传统机腹部设计，T-50 还存在侧向仰视方向进气道和发动机舱侧壁与机翼下表面形成角反射的问题，见图 6。

![图 6、下表面翼身融合设计比较（图片来自网络）](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/6.jpg)

　　另外针对 歼-20 鸭翼与主翼不共面（翼根共线）增加 RCS 的问题这里也作一说明。鸭翼不共面确实会增加回波散射源，但在经隐身修形（优化后掠角、展长和形状等）和采取吸波或透波措施情况下，测试证明翼前缘和翼尖绕射的回波可以有效抑制到 -30~-40dBm² 以下。有些军迷担心的翼根和转轴问题主要影响特定方向上的根部绕射和行波反射，实际通过设计遮挡、边缘削尖和结构化隐身处理，这类散射源在静默状态下会被抑制到基本可忽略的程度。可以十分肯定地说，歼-20 的鸭翼在无偏转或小角度偏转状态下对前向和侧向 RCS 影响均不会超过 0.001 m²。

### （三）倾斜立尾

　　倾斜立尾与平行设计原则一样几乎已经成了隐身设计的一个代言词了，但实际倾斜后 RCS 降低情况如何，存在哪些问题，则甚少有人去关注，本文针对目前普遍采用的外倾双立尾阐述一些结论。普通战机立尾的侧向 X 波段的镜面反射和翼尖翼根绕射 RCS 合计可能达到 30dBm²，考虑立尾与机表和平尾间重叠段夹角垂直时还有角反射效应，会演进成宽俯仰角范围内的强反射。如立尾外倾 30 度，角反射效应降低到可忽略，立尾本身在侧向的 RCS 值可下降到 -11~-12dBm² 左右，倾角改为 27 度左右时，RCS 变化不明显，至多增加 1dB，如采用全复合材料及吸波结构可进一步降低。歼-20 和 T-50 的立尾外倾角略小于 F-22，单位面积 RCS 差距当在 1dB 左右。

![图 7、尾部设计效果对比（图片来自网络）](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/7.jpg)

　　立尾面积大小和形状显著影响 RCS（约与面积平方成正比），因此除外倾外，减小立尾面积甚至取消立尾，是下一代战机获得最佳隐身效果的目标方向之一。F-22 为解决大迎角偏航稳定性问题，立尾设计得十分高大，歼-20 和 T-50 在具备鸭翼或前机动边条差动能力的情况下，放宽了偏航静稳定性，减轻了立尾压力，采用了面积缩小一半的全动式小立尾。歼-20 的全动立尾翼根有菱形切角，前向和侧面 RCS 较 T-50 稍优。但由于立尾缩小，立尾对发动机喷口的遮挡作用范围也随之减小，T-50 因发动机喷口超出较多，遮挡效果较差。歼-20 的腹鳍起到了对喷口侧面遮挡作用，这无论对雷达波还是红外隐身而言都是完全有必要的措施，同时立尾和腹鳍是必然要采取吸波结构设计的。由于 歼-20 立尾加腹鳍的总侧面积仍然小于 F-22，结合翼身融合占位比高的有利条件，虽然 F-22 尾段翼身融合最优，但歼-20侧面 RCS 仍能稍占优势。同样的问题 T-50 要解决则需要对机身结构和气动进行修改，难度较大。

![](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/8.jpg)

　　需要特别澄清的是，歼-20 的外倾立尾和主翼、腹鳍间并不构成直角型角反射体效应，如图8所示。有实验数据表明，当两面体间夹角超出 90 度内外 6 度以上时，角反射体宽范围强反射效应就会骤减，并趋近于正常的单平面反射特征，因此 歼-20 尾段无需担心角反射问题。但因为腹鳍向内缩进以避免与襟翼偏转空间冲突，因此形成一条纵向浅沟，造成该区域侧面边缘绕射和反射场的复杂化，有可能存在需要实测优化的地方。

### （四）双斜切进气口

　　进气道的雷达波反射场景比较复杂，总的来说其散射可归纳为三种：进气道唇口的边缘绕射回波、腔体散射回波、与相邻机体部件间的耦合散射回波。其中唇口边缘绕射回波在入射波电极化方向与唇口边缘平行时较强；腔体散射回波包括了直射入进气道照射到发动机叶片、经过道壁多次反射照射到发动机叶片、唇口绕射波部分进入进气道等几种场景；耦合散射主要是从相邻的机身、机翼等表面反射后耦合进入进气道的场景。

　　实验证明，在对战机威胁最大的前向小角度范围内，四代机普遍采用的双外切 Caret 进气道（即双压缩斜板 Caret 式进气道）较普通矩形或单斜切矩形进气道唇口的绕射回波低 15~25dB，这是由于边缘双斜切，前向上没有与水平或垂直极化波平行的边缘。缺点是在前向十几度威胁角范围内，腔体散射部分因入射波大部分直射入道内，RCS 较高，当侧入射角继续增大超过进气口平面的法向角度外，进气道收集入射波的有效截面逐步减少，腔体 RCS 逐步降低。在采用 S 形进气道、涂覆 RAM 吸波涂层和在发动机前增加吸波导流板后，在非正对进气口平面的法向入射范围，典型的腔体散射部分 RCS 最大可降低 20~25dB，退居次席地位，此时边缘唇口绕射强度上升为首要回波源，特别是考虑普通 Caret 进气道仍需保留附面层隔离板和间隙，唇口总体绕射 RCS 会较 DSI 设计高。不过，应用双外切进气道设计时，经机身上相邻部件反射耦合进入进气道的机会较少是一个优点。Caret 进气道宽高比不宜过大，0.6~0.8 之间对隐身和进气效率平衡较有利。

　　歼-20 采用的是 DSI 和双内切进气口结合的设计，较之双外切进气道，在唇口边缘绕射方面特性相似，但没有附面层隔离板的问题，而且形成腔体散射的入射波可进入范围明显缩窄。正面由于 BUMP 鼓包遮挡了相当面积的直接入射波，因此唇口绕射和腔体散射均小于相同进口面积的普通双外切 Caret 进气道。因鼓包的存在和唇口前掠，在某些特定的前侧向入射角，经相邻机身和鼓包反射耦合进入的雷达波会有所增加，但这个角度范围较小，倾角稍增大或缩小就会演变成主要向进气道外反射的有利局面。当侧视角继续增大超过斜切角度以外时，侧唇口会完全遮挡进气道避免直接入射，侧面遮挡范围远优于双外切进气道。总体来看，DSI+双内切进气道前半球综合 RCS 较双外切 Caret 会有较明显的下降，更适合搭配隐形战机外形设计，与机身或机翼的耦合效果好，有助于减少机身浸润面积降低迎头阻力。我们可以看到生产型 F-35 的 DSI 进气口已经改成与 歼-20 类似设计了，预计这类设计也将在下一代战机设计上得到普遍采用。由于 歼-20 还有进气道较长累积吸波效果更好的优势，笔者推算前半球进气道部分相对 F-22 的综合 RCS 优势会在 5dB 左右。

　　T-50 的进气口也双斜切，但不确定是否应用了Caret 式激波压缩的原理，从某些图片报道看进气道内似乎还存在类似 Su-27 系列的大面积压缩调节板，因此可能还不属于 Caret 进气道，但仅从隐身角度看双斜切唇口削弱前向绕射回波的目的是相同的。T-50 的进气口远退到前机动边条之后的下方，对于低空隐蔽进入的作战模式而言，面对前上方雷达波下视搜索能够提供较好的遮挡效果，同时也掩盖了下半机身缺乏隐身设计的缺陷，这也是该机的一个设计特色。不过由于进气道偏短直，为保障超音速性能又不便安置大型吸波整流结构，所以正前方和仰视方向的腔体散射会比较突出，即使在进气道壁和发动机叶片采用吸波或绝缘涂层等措施，其 RCS 也很难抑制到 0.5~1 m² 以下。

![图 9、进气道设计对比（图片来自网络）](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/9.jpg)

### （五）行波效应

　　当入射波沿小角度掠向机身表面时会引起导电机身表面感应出行波，行波沿机身和翼面展向前行，遇到导电率不连续的边缘返回，同时在入射波方向形成二次反射。典型三代机前后向 10 度范围内表面行波反射 RCS 可能大于1 m²，机表的小台阶、缝隙或导电率不同的材料交接处都会显著增强行波反射 RCS，不进行处理的话可能增大 10dB 左右，因此必须谨慎抹平或缓降台阶、减少开口和缝隙，包括对机身、翼面端面和各种开口、缝隙倾斜或锯齿设计。此外，端面如果呈钝圆形行波反射较弱，但这会显著增加端面的镜面反射，两相比较当以抑制镜面反射 RCS 为重。

　　机身长细比对行波 RCS 也有影响，长取机头至尾喷口长度，宽取机身横截面最宽处。长细比 8 比 10 的减少 2.3dB，长细比 6 再减少 1.1dB，越往下差距越小。过于细长的机身设计从隐身角度来讲并不可取。F-22、歼-20、T-50 虽然都偏长，但由于双发和外倾的缘故机身比较宽，因此长细比都在 4~5 左右，歼-20 最大为 5，行波 RCS 差距不超过 1dB。

　　在前向方向，当机翼前缘或者进气道唇口前掠时，行波反射会增强，同样，在后向方向，机翼后缘如果也是相对前掠（即从前向看是后掠），那么后向行波反射也会增强，因此理想的隐形战机翼面形状最好都是梯形或菱形，这样在各方向上来看都是相对后掠。有实验测试数据表明，整机翼前掠时相对后掠的情况行波反射最大可增加 10dB。在 歼-20 上存在两种前掠情况：一是前向进气道上下唇口前掠；二是后向鸭翼和立尾后缘相对前掠。由于进气道唇口尺寸较小，对行波 RCS 增加影响较小，后向双立尾后缘尺度较大，行波 RCS 增加会较明显，参考机翼尺寸，前向可能相对增加 1dB，后向相对增加值估计在 3dB 左右，不过由于行波反射量小，在端面和表面采取了众多隐身措施的情况下，至少对 歼-20 前向 RCS 影响是很小的。类似的情况，我们在 F-22 后向上也可以发现，比如其水平尾翼后缘内切角相对前掠的情况。

　　从长细比和前掠角问题也可看出，歼-20 为气动确实做了一些隐身方面的让步。鸭翼+大边条+梯形主翼的气动布局根弦很长，歼-20 为此拉长了机身，DSI 进气道的侧唇口前掠，客观上为气动布局增加了可布置空间。DSI+双内切 Caret 进气道设计在降低了前半球 RCS 的同时，在行波反射方面略有损失，但由于反射量小，总体仍优于双外切 Caret。对于立尾未采用隐身更有利的梯形而用后掠外形，参考宋老的相关论文应主要是基于气动上的考虑，一方面减少倾斜立尾下部面积，降低因背部气流外洗造成内外压力差，形成附加的抬头力矩问题；另一方面，笔者猜测尾翼后掠结合腹鳍，也有利于改善后机身截面面积律变化的平滑度，降低尾部跨、超音速波阻。

　　降低机表面的导电率也能显著降低行波效应，如采用弱导电的介质材料可比铝表面蒙皮 RCS 降低 15dB 左右。为了防止雷达波透入机身结构，介质蒙皮诸如双马酰胺复合材料等或者在外表面刷金属漆，或者应在内表面喷溅金属导电膜，外表面采用隐身涂层，并在关键部位如转角、缝隙、边缘等结合吸波结构措施，以取得整体抑制效果。F-22 机身表面蒙皮复合材料面积超过 95%，只在发动机舱段有少量金属表面。歼-20 外观上看工艺非常光滑细致，开口目测较少，接缝细密，所采用的表面蒙皮也属质量较轻的复合材料，并实现了全机覆盖，如图 10。T-50 在这方面略差，机身据目测有可能还保留了部分铝合金蒙皮区域，开口很多未按倾斜设计，缝隙也较大，比如进气道口附近的辅助进气门格栅未作锯齿化设计，总体来看行波效应的抑制较差。

![图 10、歼-20 表面材料和工艺的进步（图片来自网络）](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/10.jpg)

### （六）吸波材料的局部应用

　　吸波材料的重点涂覆部位，其实看完前面的分析也基本就清楚了，图 11 是 F-22 和 F-35 战机表面隐身处理细节方面的照片，机身上各处深色区域恰好反映出需要重点涂覆隐身材料的部位，可以看到所有重要的开口、缝隙、转角、边缘、突出物及铆接区等的边沿周围，均敷设了微凸起的吸波结构层，包括翼下隐藏挂点周围都做了考虑，细致入微，堪称经典。

![图 11、F-22、F-35 表面隐身设计细节（图片来自网络）](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/11.jpg)

## 四、 红外隐身技术

　　战机红外辐射主要来自发动机加热和气动力加热，除了设法降低发动机舱段、喷口和喷口附近尾焰温度外，利用尾翼等在主要威胁方位对这些部位进行遮挡也是常用方法。

　　二元矩形喷口由于管壁面积大有利热交换，喷焰扁平冷空气混合效果好等各种优点，其红外辐射强度较普通轴对称喷口降低 90% 以上，红外辐射波瓣变窄，是目前为止红外辐射最低的一种设计。F-35 的凹凸形锯齿轴对称喷口也能起到增强冷空气掺混作用，但降低幅度较小。由于加力燃烧时尾焰红外辐射强度和范围可能达到不加力时的 10 倍以上，四代隐身战机实现非加力超巡对隐身而言也同样至关重要。

　　在高热部位涂覆吸热层或变频涂层，以及应用主动降温措施，也可以有效改善红外辐射。例如 F-22 和 歼-20 的发动机舱段有外包夹层，可以在这个空间内引入冷气降温，但整体上要作平衡取舍，以免过度增加结构重量和加大雷达反射截面。由于通常的吸波涂料都不耐长时高温，类似 T-50 的裸露发动机舱段难以进行有效的雷达和红外辐射抑制，对隐身战机而言是一种不太可接受的设计。

　　在主要威胁方向，利用尾翼对发动机舱段和喷口进行遮挡的设计是一举多得的有效措施，可以同时降低雷达RCS和红外辐射角度范围，已经被广泛采用。对 歼-20 而言，腹鳍确实是一项简单有效的隐身增强措施。

　　此外，在燃料中掺混入特殊添加剂减低尾流红外特征和视觉可见度也是一种有效方法，这里不作详细论述。

## 五、 射频孔径优化

　　现代战机由于网络化和多任务化等因素，集成了大量电子设备和传感器装置，如雷达、通信、导航、识别、电子对抗等，这些设备在使用中向外辐射出各类射频，极易被对手截获识别导致自身位置和特征暴露，对射频孔径系统信号特征进行综合和优化是隐身战机必须解决的问题。

　　射频孔径综合和优化主要包含几个方面：最小化天线孔径数量、减少天线孔径外形尺寸、缩减天线孔径特征信号和采用低截获概率LPI技术。

### 1、减少孔径数量

　　通过实现传感器和处理机网络综合、带宽共享、天线结构共形、采集孔径和传感器综合（RF/EO）、核心处理机综合化 ICP 设计等技术，可以有效减少外露孔径数量。此外，电传改光传也是降低自身电磁辐射的一项有效措施。美国自 F-22 的“宝石柱”到 F-35 的“宝石台”，航电系统综合化范围和程度逐步提高，F-35 的天线孔径从任务需求的 37 个大幅减少到了 9 个，并率先装备了 360 度全视角 EODAS 综合光电传感器系统。国内类似“宝石柱”系统的验证据悉已经获得成功，歼-20 上能否达到“宝石台”的综合化水平尚无法猜测，不过已能看到类似的 EODAS 系统，得益于相关技术进步和后发优势，综合水准上值得期待。

### 2、减少孔径外形尺寸

　　通过采取天线内埋（嵌入式）、共形孔径和嵌入阵子的方式，可以将多个孔径的天线布局上合而为一，并减少外露的尺寸。共形天线需要考虑不同工况的频率、带宽、极化方向和增益等的兼容，性能要满足共用的需要。这类技术在 F-22、F-35 上可以轻易观察得到，比如机头部几种天线隐藏在内缩的孔径内，部分有滑动仓盖可以动态遮掩，APG-77 雷达和在机翼前缘的共形天线则集成了搜索/跟踪、通信、导航、识别和电子对抗等多重功能等。从 歼-20 外露的一些孔径分布和特征来看，兼具了 F-22 和 F-35 的一些特点，至少应具备了同类技术能力。

### 3、缩减天线孔径特征信号

　　这部分主要是低 RCS 雷达罩、辐射单元和隔离器、环绕器的设计。低 RCS 雷达罩设计需要兼顾罩内有效容积、电磁场衰减和畸变、外形隐身等多方面的因素，可采用复杂曲面设计的多层屏蔽网实现多频带通（FSS），确保只有本机雷达和相关孔径的工作波段电磁波可以透过，其他波段被屏蔽。在 FSS 带通波段内，重点是设计低 RCS 的天线阵面和支架，雷达罩和机头结合的框架上应采取倾斜或锯齿设计并涂覆吸波材料，以最大化抑制不利反射。这类技术手段原理上并不难，但实现上需要突破制造工艺技术，以及进行大量的全尺寸实物测量优化，才能确保获得最理想结果。

### 4、LPI 技术

　　LPI 是先进战机实现射频隐身的关键技术，主要包括超低副瓣天线技术、波束伪随机扫描技术、宽带频率捷变技术、低峰值功率大时宽带宽信号技术、脉冲重复频率参差技术、波形捷变技术和扩谱技术等。此外，雷达在开机状态时，天线阵面的增益方位分布和表面阻抗特性对不同入射角的雷达波反射有很大差别，理论上可以通过侦测有威胁的入射波方位，调整天线 0 增益角应对，具体实现技术本文不作详细讨论。目前国际上真正具备射频综合能力并投入实用的雷达只有美国的 APG-77、APG-80、APG-81 等有限几种。国内近年来在主动相控阵机载火控雷达方面进步很大，部分战机已经装备 ASEA，歼-20 将装备的雷达主要设计指标方面从相关刊物报道透露的一些隐约信息来看应不低于 APG-77 的标准，LPI 相关的技术研究开展也较为深入，主要技术节点进展不弱于欧洲。

## 六、 说隐者，谁是真隐者

　　综合各种措施，就雷达波隐身特性而言，为了对比方便，我们假定 5 个前提：均采用金属镀膜低 RCS 座舱盖（俄罗斯近期生产技术上已解决）；均采用 FSS 多频带通雷达罩；均采用吸波进气道，其中 T-50 只采用了复合材料管壁和吸波涂层，无完整 S 形设计；各类翼面、端面前后缘和表面不连续点采取涂覆吸波材料或直接由吸波材料构成等措施，并抹平吸波材料的水平差距；机身表面蒙皮采用介质复合材料超过 90% 以上。

　　由于三款战机尺寸相近，在采取上述这些措施后，对 X 波段，估算各机型静默状态 RCS 如下：

　　1、歼-20 前向沿纵轴约30度角范围内，RCS 可抑制 -20dB 以上，达到 -15dBm² 以下的程度，更小偏离角度内甚至可控在 -20dBm² 以下，即约为 0.01~0.03m²，较 F-22 平均有约 2~3dB 的相对优势，正侧面 RCS 为 0.2~0.4m²；

　　2、F-22 单以外形论并非如一般预期的那么理想，其前向 RCS 可抑制 -18dB 以上，达到 -13~-15dBm² 左右，即为 0.03~0.05m²，差距主要在进气道，正侧面 0.2~0.5m²。不过若考虑美国的隐身材料优势，这些值可能略有低估；

　　3、T-50 正面 RCS 约 0.5~1m²，侧面 1~3m²，但如果适当提高前向俯视角，由于前机动边条的对进气口的遮挡作用，T-50 的前向 RCS 可能会缩小到 0.05~0.1m² 的程度。

　　后向 RCS 方面由于喷口等隐身设计因素，F-22 可谓一枝独秀，暂不具可比性，作为国土防卫者，歼-20 后向隐身的缺点在一定程度上可以弱化看待。

　　需要特别说明的是，上述机型均选择偏上单翼布局，对从前向和侧向上半球俯视角度入射的雷达波均具有良好的隐身特性；当隐身战机自身雷达开机时，FSS 雷达罩在工作频带范围失去屏蔽，前向 RCS 会略有增加；对仰视角度入射的场景 歼-20 和 F-22 的隐身性能会降低约半个量级，某些角度会存在较大镜面反射（例如垂直于侧下部倾斜机身表面的方向），而 T-50 在这类场景下基本无法隐身。因此这几种机型均更适合以相对低高度隐蔽进入和突防的接战模式。

　　前面几个前提任何之一有问题的话，上述推算都会有明显变化，特别是吸波材料的水平会显著影响上述结论。F-22 和 歼-20 在隐身原则的贯彻上比较彻底，很显然隐身是设计上优先考虑的因素；T-50 在隐身技术综合基础不如美国的情况下，依据本国及参与方的能力和需求，重点强调了气动和结构效率，以及亚超音速机动性能，隐身显然被排在了靠后的位置。由于美国同时在红外隐身、射频综合等方面有领先优势，如对 F-22 进行升级可适当保持这一领先地位，但在下一代战机未出现前，差距被缩小是必然的，且不排除局部领域被反超的可能。

## 七、3.5 代的准隐身前戏

　　因为印度计划购买法国阵风的缘故，近期关于阵风与 歼-10 隐身改型对比的讨论非常多，笔者觉得不妨把 3.5 代准隐身机的比拼看做是 4 代登场的前戏，也能对我国隐身技术的掌握水平管中窥豹，略知一二。

　　法国对战机隐身技术的应用研究大体始于上个世纪 70 年代后期，达索公司的阵风从最初设计定位开始就被要求是一款缩减雷达反射截面，但并非完全隐身的战机。负责相关设计的汤姆逊-CSF 公司在 80 年代着手从雷达、进气道和发动机叶片几个方面入手来消除强散射源，一些外形上的特征可以分辨其设计思路：船型前机身将进气道左右分开遮蔽，支撑鸭翼的前机身突出侧面可以从前上方对进气口形成一定遮挡，进气道本身有一定弯曲减少雷达波直射，在发动机叶片上做了一定绝缘处理改变雷达波反射特性，并延续达索小直径头锥的风格，有助于减少反射面积等。这样设计的阵风在 1987 年冬季进行了 13 个科目的雷达散射截面和红外辐射测试。定型后阵风又陆续有一些小的隐身改进，比如在鸭翼根部增加吸波材料遮挡部件，并在机翼前缘涂覆吸波涂料等，进一步优化了隐身性能。有消息称印度购买的阵风将配置 AESA，天线阵面和底座无倾斜，除了 AESA 具备的动态控制雷达方位增益可减少反射外，其他诸如 FSS 带通雷达罩等隐身措施是否采用尚不明朗。阵风机表大部分采用碳纤维和凯芙拉复合材料，以及铝-锂蜂窝材料，少量使用金属蒙皮。印度购买的机型是否装备金属膜低 RCS 座舱盖也暂未知，未作此项配置的情况下，其前向 RCS 大致在 2~3m² 左右，配备低 RCS 座舱的话可降低到 1m²（差距不大是因为阵风的座舱内设计简洁，金属材料少，腔体前向 RCS 本就比幻影 2000 小）。但阵风侧面巨大的立尾和背鳍的存在，不太彻底的翼身融合和较传统的机身设计，传统机动襟翼设计，以及翼尖挂架的存在，侧向和侧前向 RCS 巨大，后向也未考虑雷达隐身，对红外辐射抑制方面未见明确措施。

![图 12、歼-10 隐改与阵风特征对比（图片来自网络）](https://afwing-backup.img.noc.one/aircraft/stealth-aircraft/12.jpg)

　　歼-10 隐身改型从一个侧面反映了国内在相关技术方面的水平，该机图片在网络上已经广为流传。据悉该机型主要验证的是 FSS 带通雷达罩技术、相控阵雷达及阵面斜置隐身技术、金属膜低 RCS 座舱盖和 DSI 吸波进气道设计技术，后续改进方面在鸭翼根部也增加了占位遮挡部件，这几项技术的明确应用将 歼-10 隐改的前向隐身性能基本提升了 1 个量级，尚不知是否在翼前缘增加了吸波涂层。歼-10 隐改机表蒙皮大部分为铝合金材料，进气道内采用了复合材料和吸波涂层，但机表总体复合材料应用比例低于阵风。开口、缝隙边沿无倾斜，但部分突起开口改为内吸式，减少了表面反射。粗略估计前向 RCS 有可能从原型的约 5m² 减少到 0.5~1m² 左右。由于进气道在机腹，机身对前向上半球下视探测具有良好的遮挡作用，但侧面立尾、背鳍和机身等也未做改进，侧向和后向上同阵风一样基本不隐身。目前该型机即将定型服役。

　　由于增加高端隐身配置的阵风价格以及维护费用会显著高于普通型，印度购买的阵风是什么水准数年后才能看得更清楚，买得起但是否能养得起用得好，根据过往历史经验来看还要打个问号。待印度掌握阵风成军的时候，歼-10 隐改将已服役改进多年，歼-20 也即将入役，有雄厚的生产和研发基础持续支撑优化，区区百来架阵风又有何虑哉？最多未来某时在印巴之间小范围冲突较量一二，性能又在伯仲之间，军迷大可不必担心。

## 【结束语】

　　隐身技术复杂精深，理论性和实践性很强，非专业不得其门。本文仅从业余分析的角度表述了作者一家之言，不代表型号真实隐身性能，错误和不足之处在所难免，敬请读者批评指正。

----

【注】本文已全文刊载在《海陆空天惯性世界》第115期中，经沟通确认允许作者本人贴出，请勿抄转用于商业用途，如需正式转载请与《海陆空天惯性世界》杂志社联系。

此外，对歼-20的正向隐身性能估计值个人有意乐观处理，读者可适当向靠近F-22特征值理解，二者相差不大。
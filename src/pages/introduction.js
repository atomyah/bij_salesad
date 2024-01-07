import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import HonImage from "../images/hon-hyosi.jpg"

import { Container, Row, Col, Jumbotron, Figure } from "react-bootstrap"
import Style from "./introduction.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab) // FontAwesomeのライブラリ読み込み

const IntroductionPage = () => (
  <Layout>
    <SEO
      title="ベンゾジアゼピン（睡眠薬・抗不安薬）の概要"
      description="ベンゾの身体依存形成について薬理的な原因は完全に解明されていませんが統計学的には諸説あるもののほぼ証明されています。マルコム・レーダー博士：[2~4割が重度の離脱症状を呈する]、米国上院議会タスクフォース調査：[8割が離脱症状を経験する]"
      image="/twitterimg/introduction-e1.png"
      lang="ja"
    />
    <Container fluid="md">
      <div className={Style.banner}>
        <p>
          <a
            href="https://amzn.to/3tBvm8a"
            target="blank"
            rel="noreferrer noopener"
          >
            書籍『ベンゾ系睡眠薬・抗不安薬の安全な離脱方法　改訂版』（A5版286ページ）販売中）
            <br />
          </a>
        </p>
      </div>
      <h1 className={Style.h1Size}>ベンゾジアゼピン（睡眠薬・抗不安薬）概要</h1>
      <Jumbotron>
        飲んでいませんか…？
        ソラナックス、デバス、レンドルミン、サイレース、ロヒプノール、リスミー、メイラックス、レキソタン、ユーロジン、エバミール、フルニトラゼパム、アルプラゾラム、ロラゼパム、プロチゾラム、ロフラゼプ酸、エチゾラム、ランドセン、リボトリールetc...
        このサイトは、なにも知らずに飲み続けている日本人730万人のベンゾジアゼピン系薬服用者の方のために、わたしの実体験にもとづいて作りました。まずはじめに強調しておきたいのは、よく知ればさほど怖いことにはなりません。
        <span className={Style.fontCrimson}>
          服薬していても絶対にすぐやめないように！
        </span>
      </Jumbotron>
      <p>
        世界中で処方されているほとんどの睡眠薬・抗不安薬・筋弛緩薬が、
        <font color="crimson">ベンゾジアゼピン</font>というおクスリです。
        <br />
        ベンゾジアゼピン系薬剤は、英国、豪州、デンマークで処方が規制され、その他先進国でも麻薬と同じ分類にカテゴライズされています。
        ベンゾジアゼピン薬剤が重篤な身体依存性をもち、総処方期間は2～4週間を超えてはならない、といったガイドラインがどの国にもあり、薬剤によってはラベルに注意書きもあります。例えばAtivan(ロラゼパム・ワイパックス)などです。
        日本ではようやく2017年に厚労省による注意喚起、2018年には3剤規制がかかりました。半世紀にわたって
        「一生服用しても問題のない薬」という常識で処方されてきましたが、ついにその常識は崩れつつあります。ちなに米国でも「You
        could take the medicine indefinitely」
        (無期限に服用できます)などと言われてきました。
        さらに日米だけでなく、海外の情報に調査を入れた結果安易な処方はほぼ世界中で蔓延しております。
        最も先進的な総処方期間規制のある英国、豪州ですらです。規制に罰則や物理的に長期処方不可能にするシステムがないせいです。
        <br />
        したがって日本以外のアジア各国では認識さえされていません。
        香港はベンゾの危険性を知るドクターはまったくいない（0
        doctor）と現地の被害者から情報が入っています。
        さらに最新のINCBレポートを見ると、ここ数年でインドでの数値が激増しています。
        S-DDD値（後述）はまだ一桁ですが総人口が巨大ですから総服用者数は日本を超えたかもしれません。
        日本の対応の遅さを嘆く訴えが多いですが、残念ながらベンゾ問題は日本が突出してひどいわけでなく世界中の問題であるといえます。
        本サイトではおそらく2千万人～3千万人のベンゾ服用者がいる最大消費国の米国の状況を中心に正しい情報をお伝えします。
        そのわけは世界最大のベンゾオンラインフォーラムが米国にあり、また医学論文など英語での情報量が傑出しているからです。
      </p>
      <p>
        <br />
        さて、ベンゾジアゼピン系薬剤はふたつに分類されます。ひとつは睡眠薬(sedative-hypnotics)、そして抗不安薬(anxiolytics)。
        それらを世界的に集計しているのがINCB(国際麻薬統制委員会)。最新の2016年のデータをご紹介します。
      </p>
      <Row>
        <Col md={6}>
          <span className={Style.fontBlue}>睡眠薬(sedative-hypnotics)</span>
          <Image filename="introduction1.png" alt="S-DDD値 2016年INCBデータ" />
        </Col>
        <Col md={6}>
          <span className={Style.fontBlue}>抗不安薬(anxiolytics)</span>
          <Image filename="introduction2.png" alt="S-DDD値 2016年INCBデータ" />
        </Col>
      </Row>
      <p>
        (
        <span className={Style.fontBlue}>
          <span className={Style.fontSmall}>
            S-DDD値： 人口1000人中1日あたり何錠消費されているか。
            日本は1日に52錠／千人あたり 睡眠薬が使用されている。
          </span>
        </span>
        ）
      </p>
      <p>
        抗不安薬については日本で最も処方されている国産ベンゾ「デパス」は上記INCBデータには勘定されていません。したがって抗不安薬の日本のS-DDD値は19と低いものになっていますが、デパス・エチゾラム分の21を足すと40となります。
        (
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000177221.html"
          target="blank"
          rel="noreferrer noopener"
        >
          厚労省第二回NBDオープンデータ
        </a>
        より2mg＝1錠にて積算)。
      </p>
      <p>そして両者を合計したベンゾジアゼピン薬全体のS-DDD値のグラフです。</p>
      <Row>
        <Col>
          <Image filename="introduction3.png" alt="S-DDD値 2016年INCBデータ" />
        </Col>
      </Row>
      <span>
        両剤あわせたベンゾ全てで日本のS-DDD値は世界ワースト9位の消費率
      </span>
      （千人中92錠の消費）。
      <p>
        <Link to="../medias-article/3" target="blank" rel="noreferrer noopener">
          日本では多剤処方が多く服用者はひとり平均1.9錠
        </Link>
        服用しているので19人中ひとりの計算となりますが、
        国産ベンゾ「デパス」および「エチゾラム」は0.25mg錠、0.5mg錠、1mg錠がありそれを考慮すると実際にはおそらく12～13人程度にひとりが服用していると思われます。
        2015年はS-DDD値が100、世界ワースト4位でしたから若干改善しています。ここでデータの話から飛びますが、ベンゾの場合少量であるから問題が少ないというわけには
        いかず、仮にデパス0.5mgの
        <span className={Style.fontCrimson}>
          少量であっても長期連用によって身体依存は形成されてしまいます
        </span>
        。ここでいう長期とは3~4週間を超える期間です。
      </p>
      <p>
        米国の場合を見てみますと、S-DDD値は千人中65錠程度(2015年は55錠だったので悪化している)。米国は基本単剤処方なので服用者はざっと14人にひとり程度と思われます。
        人口3.3憶人なので絶対量では世界最大の2200万錠以上／1日( ≒
        服用者数2200万人）になります。
      </p>
      <p>
        欧州においてはベンゾ発祥の地であるせいか（
        <Link
          to="../basics/benzohistory"
          target="blank"
          rel="noreferrer noopener"
        >
          1955年スイスのロッシュ社が最初のベンゾジアゼピン薬開発に成功
        </Link>
        ）
        抗不安薬の消費率がものすごく、また順位もしょっちゅう変わります。上記の表を見るとフィンランド、アイルランドはものすごいことになっています。二人ににひとりが服用しているのでしょうか。
        ウィキペディアを覗くとどちらも厳正な規制があるような記述がありますが、実際はまったく強制力のない勧告で、それもまるで活かされていないということです。
      </p>
      <p>
        最後にアジアです。INCBのデータに入ってこない台湾では５～６人にひとりが服用しているのではないかとも言われています。特に台湾はアジア最悪と国内の被害者のあいだでは絶望視されているようで、
        情報もほとんどなく（アシュトンマニュアル中文版などありません）ごくほんのわずかな外国語ができる被害者が本サイトをはじめ日本語、英語サイトを頼りにしているようです。
        <br />
        <span className={Style.fontBlue}>
          その台湾ですが、Twitterのフォロワーさんの情報により具体的な数字がわかりました。
          <br />
          <strong>人口2300万人中、睡眠薬服用者は426万人</strong>
          とのことです。10人に1人が不眠症で悩んでおり
          <strong>5人に1人が睡眠薬を服薬している</strong>
          とのこと。台湾国立薬剤師連盟によるデータです。
          アジアワースト１であり、仮にINCBが台湾のデータを取り上げたらベルギーを抜いて世界ワースト3位に入ってくるでしょう。
        </span>
        参考記事：
        <a href="https://tw.news.yahoo.com/%E5%9C%8B%E4%BA%BA%E5%B9%B4%E5%90%9E9%E5%84%84%E9%A1%86%E5%AE%89%E7%9C%A0%E8%97%A5-215008902.html">
          國人年吞9億顆安眠藥
        </a>
      </p>
      <Jumbotron>
        <p>
          【最大薬害？】
          <br />
          これを薬害と呼ぶのか医療スキャンダルと呼ぶのかわかりませんが日本における他の薬害被害と比べてみます。
          <br />
          ー被害者数比較ー
          <br />
          薬害エイズ：1800人
          <br />
          薬害肝炎：推定10,000人以上
          <br />
          子宮頸がんワクチン：1,739人以上
          <br />
          サリドマイド：認定309人（推定数千人）
          <br />
          ベンゾジアゼピン：重篤被害者数50万人、重度以上被害者140万人 （
          <span className={Style.fontSmall}>
            <Link
              to="../medias-article/3"
              target="blank"
              rel="noreferrer noopener"
            >
              長期服用者730万人
            </Link>
            のうち重篤被害者者を7%、重度以上被害者を20%と計算（根拠となる参考記事：
            <Link
              to="../patients-article/11"
              target="blank"
              rel="noreferrer noopener"
            >
              ベンゾ離脱症状が重症になる確率は？
            </Link>
            ）。
            これらの50万人、140万人には、飲み続けているので重度身体依存状態にあることに気づいてない予備軍も含まれる。
          </span>
          <br />
           
        </p>
        <p>
          ※しかも半世紀前から"
          <span className={Style.fontCrimson}>一生飲んでも問題のない薬</span>
          "として連綿と漫然処方され続け、
          その間に犠牲となった被害者は含みません。
          最初はわたくし管理人も”日本最大”と認識していましたが世界各国を調査の末、
          これは文字通り<strong>人類史上最大</strong>
          と認識するようになりました。なんともアジテート気味で頭の悪そうな気が引ける表現ですが…事実なので仕方ありません。
        </p>
      </Jumbotron>
      <p>
        さて、ベンゾジアゼピンは発作時だけなど頓服として、またはほんの数日間の一時的な使用であれば、
        <span className={Style.fontCrimson}>
          即効性もあり非常に良いおクスリ
        </span>
        です。
        手術前や救急などに使用されることはよくあります。しかし、長期連用すると少量であっても"処方用量内依存"といってやめるのが非常に難しくなります
        （精神依存ではなく身体依存です。英語ではdependencyといい薬物中毒やアルコール依存のaddictionやabuseとは異質なものです）。精神的な渇望はまったくなく（例外あり）やめたくとも強烈な数々の離脱症状が襲いやめられないのです。
        <br />
        仮に一気断薬もしくは短期間の減薬をすると
        <font color="crimson">「生き地獄」「拷問」</font>
        といってもいい離脱症状に何年も苦しむことになります。
        どのくらいの辛さか。寝たきりになれるのがうらやましいと思うくらいです(参考：
        <Link
          to="../medias-article/11"
          target="blank"
          rel="noreferrer noopener"
        >
          管理人の経験したベンゾ離脱症状
        </Link>
        ）。 これは依存症などといったものではなくあきらかに
        <span className={Style.fontCrimson}>「薬剤性神経システム傷害</span>」（
        <span className={Style.fontCrimson}>Injury</span>)です。こちらの
        <Link
          to="../doctors-article/3"
          target="blank"
          rel="noreferrer noopener"
        >
          自死被害者の訴え
        </Link>
        をご覧ください。
      </p>
      それゆえベンゾからの離脱は覚せい剤、ヘロインといった麻薬よりもはるかに難しいものになります。
      服薬量を少しづつ減らしながら壊された神経システムの回復を年単位で待つより他に方法はありません。
      治療法はありません。
      ただ不思議なことにすべての長期連用者がなるのではなく、“約半数”の服用者のみが依存形成されます。
      その他半数の方々はまったく離脱症状がなく簡単にやめることができます。
      さらに残りの離脱症状を経験するグループでも、軽症であったり離脱症状発症期間が短い人は多いです。
      おそらく
      <span className={Style.fontCrimson}>
        激しい離脱症状に見舞われる人々は服薬者の10%～30%程度
      </span>
      でしょう
      （それが医療現場でもほとんどのドクターが気づけなかった理由のひとつです）。
      <br />
      なぜ半数の人たちにとって長期服用が問題ないのか、薬理的には完全に解明されていません。
      しかし統計学的には諸説あるもののほぼ証明されています
      （マルコム・レーダー博士：‟
      <a
        href="https://www.benzo.org.uk/kwotez.htm"
        target="blank"
        rel="noreferrer noopener"
      >
        <span className={Style.fontCrimson}>
          20~30%が離脱に苦労しそのうちの3割が激甚離脱症状を経験
        </span>
      </a>
      "。 アメリカ精神医学会：‟
      <a
        href="https://pubmed.ncbi.nlm.nih.gov/1987812/"
        target="blank"
        rel="noreferrer noopener"
      >
        40%~80%が離脱症状を経験する
      </a>
      ”。 マイケル・ソヤカ博士：“
      <Link to="../doctors-article/11">
        <span className={Style.fontCrimson}>
          1か月の連用で約半数が身体依存形成される
        </span>
      </Link>
      ”。）
      <br />
      <p></p>
      <Jumbotron>
        ちなみに
        <span className={Style.fontCrimson}>
          ベンゾジアゼピン薬処方の65％は「精神科以外」で処方されてきました。
        </span>
        例：
        <ul>
          <li>PMSに対し婦人科で処方、</li>
          <li>目眩で耳鼻科にて処方、</li>
          <li>肩こり腰痛に整形外科で処方、</li>
          <li>アトピーで皮膚科にて処方、</li>
          <li>頻尿で泌尿器科にて処方、</li>
          <li>胃痛で神経内科にて処方、</li>
          <li>顎関節症で歯科で処方、</li>
          <li>手術後の不眠や不定愁訴に対し外科、産婦人科、肛門科で処方、</li>
          <li>ドライアイ症候群で眼科で処方</li>
        </ul>
      </Jumbotron>
      <p>
        器質的な異常が見つからないとどの医師も「安定剤（抗不安薬）を出しておこう」というわけです（また日本は睡眠不足大国でもあります）。
        とりあえずビール（ベンゾ）くらい気軽に処方してきました。
        海外では「キャンディーのように処方された」という表現をよく使います。
        最近では<strong>コロナウィルス</strong>
        感染後に残る、微熱が続くだとか倦怠感に対し処方する例が目立っています。
        実際、最初のうちはよく効くので患者も喜びます。リスクを説明されず安全な薬ですと言われれば飲み続けます。
        ドクターも患者が満足してくれしかも処方箋を書くだけの作業なのでラクなわけです。そしてオールマイティで便利な薬であるわけです。
        したがってこれを読んでいるあなたもベンゾジアゼピン長期連用者かもしれません。
        日本では34種のベンゾジアゼピン系薬剤があり、ジェネリック名も入れたら何を服薬しているかは調べないとわかりません。
        処方医も「これはベンゾといって連用すると危険なクスリです」とインフォームドコンセントしてくれるケースは
        ほぼありません。逆に「弱いお薬ですから」と言いながら簡単に処方してきます。
        （ただ日本においてはここ1年ほどで（2019年12月現在）だいぶ処方が減ってきたようです。まだ地域格差・病院格差・医師個人の認知度に差があります）。
        もし自分に常備薬があったらぜひ
        <Link to="../basics/benzolist" target="blank" rel="noreferrer noopener">
          ベンゾジアゼピン系薬剤一覧ページ
        </Link>
        をチェックしてください。そしてビンゴだったとしてもすぐにやめないように！
      </p>
      <p>
        自分は飲んでなかったですか？ それはよかった！ それでも家族や親戚は？
        もし飲んでいたらゆっくりとした漸減であれば怖いものではないと伝えてあげてください。絶対に勝手にやめさせないように。
      </p>
      <p>
        会社の同僚、部下、上司が飲んでいる？ベンゾには米国に持ち込むと逮捕・収監されてしまうものがあります。フルニトラゼパム（サイレース、ロヒプノール）です。デートレイプに多用されたので禁止されました。
        <strong>米国出張</strong>
        や旅行前に要チェック。もし服薬しているのなら渡米は取りやめるか主治医の英文診断書を。別の薬への置換はリスキーであり簡単にはいかない場合があります。渡米後にフルニトラゼパムに戻すことは不可能です。
      </p>
      <p>
        <strong>集団訴訟について</strong>
      </p>
      <p>
        英国ではベンゾ被害が明らかになった1980年に、14,000人の患者および1,800の法律事務所による史上最大の集団訴訟を引き起こしました。その訴訟事項は、製薬メーカーは依存の可能性を知っていたが医師に対して意図的にこの情報を差し控えたというものです。（残念ながら資金不足で訴訟そのものはとん挫しています）。このクラスアクションをきっかけに「医師は患者に対してベンゾジアゼピン依存性と離脱症候群リスクについて適切な警告を行い、患者はリスク説明を受けたという同意書に署名」しなければならないという規制ができました。
      </p>
      <p>
        <strong>減薬方法について</strong>
      </p>
      <p>
        ということで当面は自分の身は自分で守るしかありません。主治医のいうとおりのペースでやめていくと、例えば元々の症状であった不眠・不安以外にも摩訶不思議な症状がたくさんでてくるので、ベンゾ減薬による離脱症状と自分でわかります。
        主治医が「もともとの症状だ」と言うかもしれませんが、精神的な病とは別次元の症状、まさに神経傷害によるものですので重症であればすぐわかります。軽傷～中傷ですと、「線維筋痛症」や「慢性疲労症候群」「身体表現性傷害」などに誤診される可能性が高いです。
        <Link
          to="../doctors-article/6"
          target="blank"
          rel="noreferrer noopener"
        >
          慢性疾患と似ているベンゾジアゼピン医原症状
        </Link>
        をご参照ください。
        <span className={Style.fontCrimson}>
          離脱症状がでたらすぐに再服薬もしくはもとの容量に戻し
        </span>
        、しばらくしてからマイクロテーパリングによる年単位の減薬を行ってください.
        <br />
      </p>
      （もし離脱症状が出なかったらあなたは「もう半数」の身体依存形成されなかったラッキーなほうと思われます。
      そのまま主治医の言うとおりのペースで減薬していってかまわないでしょう。
      ただしメイラックス（ロフラゼプ酸）など半減期が超長期のベンゾには注意で、それらについてはすべてのケースで数年の漸減が必要と思った方が良いでしょう。半減期が長いので、離脱症状の発生に大きな遅延が生じる可能性があるためです）
      <br />
      <br />
      ※&nbsp;<strong>主治医のいうとおりのペース例&nbsp;</strong>＝
      「半分に割って数週，さらに4分の1で数週、そして0に」「減薬期間は約3か月で」など。
      <p>
        <br />
        離脱症状が出た場合でも短期間で終わる可能性はそれなりにあります。しかし、自分は大丈夫だろうと甘くみないように。
        <span className={Style.fontCrimson}>
          ベンゾの場合は数ヶ月での断薬は一気断薬と同じ
        </span>
        と思ってください（重度身体依存の場合）。
        短期で減断薬してしまいますと、断薬してからどんどん症状が激しくなっていき、半年～1年後に耐えられなくなって再服用してもまったく効果がないケースは多いです。
        急減薬でもほんの数週間～数か月の離脱症状で済む方はいます。しかし
        <Link to="../patients-article/1">
          そういった短期成功例に合わせてしまうことはロシアンルーレットになります
        </Link>
        。
        回復期間を前もって調べる方法はありません。後戻りしてやり直すこともできません。
        人生をノーリターンのギャンブルに賭けないようにしてください。&nbsp;
        <br />
        <br />
        慎重に年単位で減薬していくのは毎日の減薬作業がめんどくさいかもしれません。しかし極小の症状で済み、
        働きながらでも減薬を進めていけるでしょう。&nbsp;まずはアシュトンマニュアル読んでください。2002年に作成されたので情報としては古いですが基礎知識を固める必須教科書だと思ってください。
        アシュトンマニュアル日本語版はネットでダウンロードできます。 →&nbsp;
        <a href="https://www.benzo.org.uk/amisc/japan.pdf">こちら</a>
      </p>
      <p>
        ただアシュトンマニュアルをすでに読んだ方はわかると思いますが、アシュトンマニュアルの参考減薬ペース（半年）でもまだ速すぎるのです（重度身体依存の場合）。
        また細かい間違いもいくつかあります。 アシュトンマニュアルを読んだら次に
        <Link
          to="../doctors-article/26"
          target="blank"
          rel="noreferrer noopener"
        >
          ベンゾジアゼピンテーパリング戦略とソリューション
        </Link>
        を読んでください。
        基礎固めはこれで十分です。あとはあなたにしかわからない、あなた独自のカスタマイズが必要です。
        このサイトやツイッターで粒度の小さな情報は発信していくので勉強してください。
        あなたの主治医はあなた自身です。
      </p>
      <br />
      ベンゾジアゼピン情報センター　
      <Link to="../patients-article/8" target="blank" rel="noreferrer noopener">
        管理人プロフィール
      </Link>
      <br />
      <a
        href="https://twitter.com/benzoinfojapan"
        target="blank"
        rel="noreferrer noopener"
      >
        twitter <FontAwesomeIcon icon={["fab", "twitter"]} />{" "}
        {/* ツイッターアイコン */}{" "}
      </a>
      <p></p>
    </Container>
  </Layout>
)

export default IntroductionPage

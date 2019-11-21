import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { ClAccordion } from "mp-colorui";

class ServiceGuarantee extends Component {
  config = {
    navigationBarTitleText: '服务保障'
  }
  constructor (props) {
    super(props)
    this.state = {
      questions: [
        {
          question: '如何使用洛客云设计？',
          answer: '选择您所需要的设计服务，点击“立即购买”，成功付款后即可享有专属企业设计服务群及设计项目空间。',
          expanded: false
        },
        {
          question: '购买后项目什么时候启动？',
          answer: '购买成功后，1小时内我们会在钉钉内建立您企业的设计群并且匹配项目经理，项目经理会确定您的设计需求，建立专属项目空间并且匹配设计师。',
          expanded: false
        },
        {
          question: '企业同时有多个设计需求怎么操作？',
          answer: '企业可以选择所需设计服务分别下单，我们将对不同项目同步进行设计，保证交付时间。',
          expanded: false
        },
        {
          question: '项目设计周期多长？',
          answer: '标准设计周期15天，可以根据您的需求和产品的具体情况，难易程度进行调整。',
          expanded: false
        },
        {
          question: '匹配的设计师资质怎么样？',
          answer: '洛客云设计集合了全国的设计师，设计师都是注册、面试、认证以及跟洛客云设计平台签约的设计师，相当于我们的线上员工，设计师的能力、作品集等都可同步给到。另外我们每个项目匹配专职项目经理，把控项目质量，保证项目进度。',
          expanded: false
        },
        {
          question: '设计过程怎么透明？',
          answer: '每个设计项目我们都会在钉钉上架构专属的项目空间，结合钉钉在线化能力，设计过程开放透明，沟通即时在线。',
          expanded: false
        },
        {
          question: '洛客云设计可以保证商标注册成功吗？',
          answer: '受商标查询系统盲区以及其他因素影响，我们无法承诺商标注册100%成功；但承诺不限次数修改方案，您可以提出修改需求，我们保证满意交付。',
          expanded: false
        },
        {
          question: '是用下单付款的钉钉账号进行一系列沟通吗？',
          answer: '付款成功后，我们会首先联系付款人的钉钉账号，再由付款人拉企业设计对接人进群。只要是钉钉上的账号都可以进行后续设计沟通及组建项目空间。',
          expanded: false
        },
        {
          question: '假如在意向方向探讨期，设计师提出来的构思和我们之间差距很大，没有办法达成共识，那怎么处理？',
          answer: '洛客云设计承诺设计满意交付，您可以选择更换设计师，也可以随时提出终止合作进行退款。不过每个项目都有专门负责项目经理，可以保障与设计师的沟通与质量，一般达不成设计共识的情况不会出现。',
          expanded: false
        },
        {
          question: '设计费用如何支付？有发票及合同吗？',
          answer: '费用直接在钉钉平台内线上支付，企业需要发票和合同可以直接在项目空间提出申请。',
          expanded: false
        },
        {
          question: '设计过程中还需要额外费用吗？',
          answer: '应用上的价格就是最终设计的成交价，洛客云设计是专为中小企业打造的轻量级设计服务，所有价格都非常的优惠。',
          expanded: false
        },
        {
          question: '所有谁项目都是一次性全额付款吗？',
          answer: '款项是一次性全额付款的。钉钉平台承诺企业7天无理由退款，洛客云设计承诺更换设计师后不满意全额退款，给企业双重保障。',
          expanded: false
        },
        {
          question: '7天无理由退款和不满意退款都直接在钉钉开放市场提出吗？',
          answer: '7天无理由退款在开放市场和项目空间内提出都可以。成功付款超过7天后，由于钉钉开放市场没有办法进入项目内审批，不满意退款需要企业方在项目空间内提出。',
          expanded: false
        },
        {
          question: '什么时间可以申请无理由退款？',
          answer: '钉钉平台承诺的的7天无理由退款是从企业成功付款之日开始算起，即成功付款后的7天内都可以随时申请无理由退款。',
          expanded: false
        },
        {
          question: '洛客云设计和洛智能设计有什么区别？',
          answer: '洛客云设计依靠积累的设计师资源库，会依据您的设计项目，为您匹配最合适的设计师进行设计，设计全过程有专业的并且具有多年设计经验的项目经理进行质量把控。洛智能设计是依附人工智能的技术，以及洛可可设计集团15年的设计经验，根据特定输入的设计需求，智能生成设计结果。',
          expanded: false
        }
      ]
    }
  }
  renderContent(card, animation, speed = 0.15) {
    return (
      <ClLayout margin='normal' marginDirection='vertical'>
        <ClAccordion title='道德经' card={card} animation={animation} speed={speed}>
          <ClLayout padding='normal' paddingDirection='around'>
            <ClCard type='full'>
              <ClText text='道可道，非常道。名可名，非常名。无名天地之始。有名万物之母。' textColor='blue' />
            </ClCard>
            <ClCard type='full'>
              <ClText text='有无相生，难易相成，长短相形，高下相盈，音声相和，前后相随。恒也。' textColor='brown' />
            </ClCard>
            <ClCard type='full'>
              <ClText text='上善若水。水善利万物而不争，处众人之所恶，故几于道。' textColor='red' />
            </ClCard>
            <ClCard type='full'>
              <ClText text='道生一，一生二，二生三，三生万物。万物负阴而抱阳，冲气以为和。' />
            </ClCard>
          </ClLayout>
        </ClAccordion>
      </ClLayout>
    )
  }
  render () {
    return (
      <View>
        {this.renderContent(false, true)}
      </View>
    )
  }
}
export default ServiceGuarantee;

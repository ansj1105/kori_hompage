import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  CreditCard,
  Globe2,
  Layers3,
  RadioTower,
  Smartphone,
  Store,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './RoadmapPage.css';

const roadmapSteps = [
  {
    step: 'Phase 1',
    periodEn: 'Foundation',
    periodKo: '기반 단계',
    titleEn: 'Token Launch & Wallet Deployment',
    titleKo: '토큰 런치 및 월렛 배포',
    descEn:
      'Initial token deployment, treasury allocation setup, and wallet availability establish the ecosystem foundation.',
    descKo:
      '초기 토큰 배포, 트레저리 할당 구조 설정, 월렛 제공을 통해 생태계의 기본 토대를 구축하는 단계입니다.',
    bulletsEn: ['Token deployment', 'Treasury allocation setup', 'Wallet availability'],
    bulletsKo: ['토큰 배포', '트레저리 할당 구조 설정', '월렛 제공 시작'],
    icon: Wallet,
    status: 'done',
  },
  {
    step: 'Phase 2',
    periodEn: 'Participation',
    periodKo: '참여 단계',
    titleEn: 'Mobile Mining Activation',
    titleKo: '모바일 마이닝 활성화',
    descEn: 'Participation-based mining becomes active through wallet integration.',
    descKo: '월렛 연동을 통해 참여형 모바일 마이닝이 본격적으로 활성화되는 단계입니다.',
    bulletsEn: ['Wallet-linked mining', 'Participation-based rewards', 'User growth entry point'],
    bulletsKo: ['월렛 연동 마이닝', '참여형 보상 구조', '사용자 유입 시작점 확보'],
    icon: Smartphone,
    status: 'done',
  },
  {
    step: 'Phase 3',
    periodEn: 'Service Layer',
    periodKo: '서비스 단계',
    titleEn: 'Foxyya Platform Integration',
    titleKo: 'Foxyya 플랫폼 통합',
    descEn: 'Service-layer utility expands through social platform integration.',
    descKo: '소셜 플랫폼 통합을 통해 서비스 레이어 유틸리티가 확장되는 단계입니다.',
    bulletsEn: ['Social platform linkage', 'Engagement-driven utility', 'Service-layer demand'],
    bulletsKo: ['소셜 플랫폼 연동', '참여 기반 유틸리티 확대', '서비스 수요 형성'],
    icon: RadioTower,
    status: 'current',
  },
  {
    step: 'Phase 4',
    periodEn: 'Liquidity Layer',
    periodKo: '유동성 단계',
    titleEn: 'DEX Listing',
    titleKo: 'DEX 상장',
    descEn: 'Decentralized exchange access strengthens external liquidity participation.',
    descKo: '탈중앙화 거래소 접근을 통해 외부 유동성 참여를 강화하는 단계입니다.',
    bulletsEn: ['External liquidity access', 'Swap market visibility', 'Early market participation'],
    bulletsKo: ['외부 유동성 접근', '스왑 시장 가시성 확보', '초기 시장 참여 확대'],
    icon: Layers3,
    status: 'done',
  },
  {
    step: 'Phase 5',
    periodEn: 'Market Expansion',
    periodKo: '시장 확장',
    titleEn: 'CEX Listing',
    titleKo: 'CEX 상장',
    descEn: 'Centralized exchange readiness broadens market visibility and access.',
    descKo: '중앙화 거래소 준비와 진입을 통해 시장 가시성과 접근성을 넓히는 단계입니다.',
    bulletsEn: ['Broader visibility', 'Expanded access', 'Order-book market reach'],
    bulletsKo: ['더 넓은 시장 가시성', '접근성 확대', '오더북 시장 확장'],
    icon: Globe2,
    status: 'current',
  },
  {
    step: 'Phase 6',
    periodEn: 'Payment Layer',
    periodKo: '결제 단계',
    titleEn: 'KORION Pay Deployment',
    titleKo: 'KORION Pay 배포',
    descEn: 'Dedicated payment-layer functionality expands token utility.',
    descKo: '전용 결제 레이어 기능을 통해 토큰의 실사용 유틸리티를 확장하는 단계입니다.',
    bulletsEn: ['P2P payment support', 'Service-linked payments', 'Utility beyond holding'],
    bulletsKo: ['P2P 결제 지원', '서비스 연동 결제', '보유를 넘어선 실사용성'],
    icon: CreditCard,
    status: 'upcoming',
  },
  {
    step: 'Phase 7',
    periodEn: 'Offline Capability',
    periodKo: '오프라인 결제',
    titleEn: 'Offline Payment Infrastructure',
    titleKo: '오프라인 결제 인프라',
    descEn: 'Offline-capable transaction logic is deployed or expanded.',
    descKo: '오프라인 환경에서도 동작 가능한 결제 로직과 인프라를 배치·확장하는 단계입니다.',
    bulletsEn: ['Low-connectivity payments', 'Deferred synchronization', 'Practical payment resilience'],
    bulletsKo: ['저연결 환경 결제', '지연 동기화 구조', '실사용 결제 탄력성 확보'],
    icon: Store,
    status: 'current',
  },
  {
    step: 'Phase 8',
    periodEn: 'Global Scale',
    periodKo: '글로벌 확장',
    titleEn: 'Global Ecosystem Expansion',
    titleKo: '글로벌 생태계 확장',
    descEn: 'Broader partnerships, merchant adoption, and service growth drive market expansion.',
    descKo: '더 넓은 파트너십, 가맹점 채택, 서비스 성장으로 시장 확장을 이끄는 단계입니다.',
    bulletsEn: ['Partnership growth', 'Merchant adoption', 'Service ecosystem scale'],
    bulletsKo: ['파트너십 확대', '가맹점 채택 증가', '서비스 생태계 확장'],
    icon: ArrowUpRight,
    status: 'upcoming',
  },
];

function getStatusLabel(status: string, isKo: boolean) {
  if (status === 'done') return isKo ? '완료' : 'Completed';
  if (status === 'current') return isKo ? '진행중' : 'In Progress';
  return isKo ? '예정' : 'Upcoming';
}

function getStatusIcon(status: string) {
  if (status === 'done') return CheckCircle2;
  if (status === 'current') return Clock3;
  return CircleDot;
}

export function RoadmapPage() {
  const { language } = useLanguage();
  const isKo = language === 'KR';

  const completedCount = roadmapSteps.filter((item) => item.status === 'done').length;
  const progressPercent = Math.round((completedCount / roadmapSteps.length) * 100);

  return (
    <div className="roadmap-page">
      <section className="roadmap-hero">
        <div className="roadmap-page__container">
          <motion.div
            className="roadmap-hero__content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="roadmap-hero__eyebrow">
              <span className="roadmap-hero__eyebrow-dot" />
              {isKo ? 'Whitepaper-Based Roadmap' : 'Whitepaper-Based Roadmap'}
            </div>

            <h1 className="roadmap-hero__title">
              {isKo ? '완료 구간이 한눈에 보이는 KORION 로드맵' : 'KORION roadmap with visible milestone completion'}
            </h1>

            <p className="roadmap-hero__description">
              {isKo
                ? '백서의 공식 로드맵 순서를 유지하면서, 완료된 단계는 더 밝고 강하게, 진행중 단계는 집중도 있게, 예정 단계는 차분하게 보이도록 시각적 우선순위를 재구성했습니다.'
                : 'This version preserves the whitepaper roadmap sequence while making completed milestones brighter, current milestones more focused, and upcoming milestones calmer in visual priority.'}
            </p>

            <motion.div
              className="roadmap-progress"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="roadmap-progress__head">
                <span>{isKo ? 'Roadmap Progress' : 'Roadmap Progress'}</span>
                <strong>{completedCount}/{roadmapSteps.length} {isKo ? '완료' : 'completed'}</strong>
              </div>

              <div className="roadmap-progress__track">
                <motion.div
                  className="roadmap-progress__fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
                />
              </div>

              <div className="roadmap-progress__meta">
                <span>{progressPercent}%</span>
                <span>{isKo ? '완료 구간 강조 표시 적용' : 'Completed milestones highlighted'}</span>
              </div>
            </motion.div>

            <div className="roadmap-hero__actions">
              <Link to="/explorer" className="roadmap-hero__button roadmap-hero__button--primary">
                {isKo ? 'Explorer 보기' : 'View Explorer'}
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/tokenomics" className="roadmap-hero__button roadmap-hero__button--secondary">
                {isKo ? '토크노믹스 보기' : 'View Tokenomics'}
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="roadmap-grid-section">
        <div className="roadmap-page__container">
          <div className="roadmap-grid">
            {roadmapSteps.map((item, index) => {
              const Icon = item.icon;
              const StatusIcon = getStatusIcon(item.status);

              return (
                <motion.article
                  key={item.step}
                  className={`roadmap-card roadmap-card--${item.status}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.42, delay: index * 0.04 }}
                >
                  {item.status === 'done' && (
                    <motion.div
                      className="roadmap-card__shine"
                      animate={{ x: ['-140%', '160%'] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        repeatDelay: 1.8,
                        ease: 'easeInOut',
                      }}
                    />
                  )}

                  <div className="roadmap-card__top">
                    <div className="roadmap-card__icon">
                      <Icon size={20} />
                    </div>

                    <div className="roadmap-card__phase">
                      <span>{item.step}</span>
                      <strong>{isKo ? item.periodKo : item.periodEn}</strong>
                    </div>

                    <div className={`roadmap-card__badge roadmap-card__badge--${item.status}`}>
                      <StatusIcon size={14} />
                      <span>{getStatusLabel(item.status, isKo)}</span>
                    </div>
                  </div>

                  <h3 className="roadmap-card__title">
                    {isKo ? item.titleKo : item.titleEn}
                  </h3>

                  <p className="roadmap-card__desc">
                    {isKo ? item.descKo : item.descEn}
                  </p>

                  <div className="roadmap-card__bullets">
                    {(isKo ? item.bulletsKo : item.bulletsEn).map((bullet, bulletIndex) => (
                      <motion.div
                        key={bullet}
                        className="roadmap-card__bullet"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 * bulletIndex }}
                      >
                        <BadgeCheck size={15} />
                        <span>{bullet}</span>
                      </motion.div>
                    ))}
                  </div>

                  {item.status === 'done' && (
                    <div className="roadmap-card__footer roadmap-card__footer--done">
                      <CheckCircle2 size={16} />
                      <span>{isKo ? '완료 단계' : 'Completed milestone'}</span>
                    </div>
                  )}

                  {item.status === 'current' && (
                    <div className="roadmap-card__footer roadmap-card__footer--current">
                      <Clock3 size={16} />
                      <span>{isKo ? '현재 집중 구간' : 'Current focus milestone'}</span>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
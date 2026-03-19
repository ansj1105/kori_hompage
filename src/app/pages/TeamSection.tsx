import { motion } from 'motion/react';
import {
  Crown,
  Code2,
  Globe2,
  ShieldCheck,
  Users2,
  ChevronRight,
  BadgeCheck,
  Network,
  Megaphone,
  Flag,
  Sparkles,
  Orbit,
  Mail,
  Linkedin,
  Instagram,
  Telegram,  
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useAssetUrl } from '../utils/assetLoader';
import './TeamSection.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const leadership = [
  {
    role: 'CEO / Founder',
    roleKo: '대표이사 / Founder',
    name: 'Richard Jang',
    image: null,
    icon: Crown,
    summary:
      'Leads the overall vision, planning, development direction, and ecosystem strategy of the project.',
    summaryKo:
      '프로젝트의 전체 비전, 기획, 개발 방향성, 생태계 전략을 총괄합니다.',
    bio:
      'Richard Jang has led multiple projects across various industries and brings broad executive leadership experience. He oversees the strategic direction, planning, development coordination, and overall ecosystem execution of KORION.',
    bioKo:
      'Richard Jang은 다양한 분야에서 여러 프로젝트를 이끌어온 대표이사 경력을 바탕으로 KORION의 전략 방향, 기획, 개발 조율, 전반적인 생태계 실행을 총괄하고 있습니다.',
    highlights: [
      'Strategic Direction',
      'Planning & Execution',
      'Ecosystem Leadership',
    ],
    highlightsKo: ['전략 총괄', '기획 및 실행', '생태계 리더십'],
    email: 'mailto:jang2020111@gmail.com',
    linkedin: 'https://www.linkedin.com/in/richard-jang-36a1b02a1/',
    instagram: 'https://www.instagram.com/cats__j/',
  },
  {
    role: 'Development Director',
    roleKo: '개발이사',
    name: 'Seo-Jeong Ahn',
    image: null,
    icon: Code2,
    summary:
      'Oversees the full technical execution of the ecosystem including platform architecture and development.',
    summaryKo:
      '플랫폼 아키텍처와 개발 전반을 포함한 생태계의 전체 기술 실행을 총괄합니다.',
    bio:
      'Seo-jeong Ahn, a graduate of Korea University, serves as the Development Director of the KORION project, overseeing the overall development, including system architecture, technical execution, and platform development at the ecosystem level.',
    bioKo:
      '고려대학교 졸업자인 안서정 개발이사는 KORION 프로젝트 전반의 개발을 총괄하며, 시스템 설계, 기술 실행, 플랫폼 개발을 생태계 단위에서 책임지고 있습니다.',
    highlights: [
      'Architecture Design',
      'Platform Development',
      'Technical Leadership',
    ],
    highlightsKo: ['아키텍처 설계', '플랫폼 개발', '기술 리더십'],
    email: 'mailto:dev@korion.io',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
];

const partnerRegions = [
  {
    region: 'Asia',
    regionKo: '아시아',
    icon: Globe2,
    text: 'Regional communication and growth partners supporting awareness and user expansion.',
    textKo:
      '인지도 확대와 사용자 확장을 지원하는 지역 커뮤니케이션 및 성장 파트너들입니다.',
  },
  {
    region: 'Europe',
    regionKo: '유럽',
    icon: Network,
    text: 'Strategic network partners supporting project communication and international positioning.',
    textKo:
      '프로젝트 커뮤니케이션과 국제적 포지셔닝을 지원하는 전략 네트워크 파트너들입니다.',
  },
  {
    region: 'North America',
    regionKo: '북미',
    icon: Megaphone,
    text: 'Promotion-oriented partners expanding visibility across digital channels and communities.',
    textKo:
      '디지털 채널과 커뮤니티 전반에서 가시성을 확대하는 홍보 중심 파트너들입니다.',
  },
  {
    region: 'Global Network',
    regionKo: '글로벌 네트워크',
    icon: Users2,
    text: 'A distributed global support layer strengthening community trust and ecosystem presence.',
    textKo:
      '커뮤니티 신뢰와 생태계 존재감을 강화하는 분산형 글로벌 지원 네트워크입니다.',
  },
];

const partnerProfiles = [
  {
    name: 'Korea Community Partner',
    nameKo: '대한민국 커뮤니티 파트너',
    country: 'Korea',
    countryKo: '대한민국',
    image: 'partner-avatar',
    icon: Flag,
    desc:
      'Supports domestic awareness growth, local campaigns, and regional community communication.',
    descKo:
      '국내 인지도 확대, 로컬 캠페인, 지역 커뮤니티 커뮤니케이션을 지원합니다.',
    email: 'mailto:partner@korion.io',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  {
    name: 'Japan Promotion Partner',
    nameKo: '일본 홍보 파트너',
    country: 'Japan',
    countryKo: '일본',
    image: null,
    icon: Flag,
    desc:
      'Expands regional visibility and localized partner communication in Japan.',
    descKo:
      '일본 지역 내 가시성과 현지 파트너 커뮤니케이션 확대를 담당합니다.',
    email: 'mailto:partner@korion.io',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  {
    name: 'Vietnam Growth Partner',
    nameKo: '베트남 성장 파트너',
    country: 'Vietnam',
    countryKo: '베트남',
    image: null,
    icon: Flag,
    desc:
      'Focuses on market reach, community attention, and local audience engagement.',
    descKo:
      '시장 도달 범위, 커뮤니티 관심도, 현지 사용자 참여 확대에 집중합니다.',
  },
  {
    name: 'Philippines Community Partner',
    nameKo: '필리핀 커뮤니티 파트너',
    country: 'Philippines',
    countryKo: '필리핀',
    image: null,
    icon: Flag,
    desc:
      'Strengthens local ecosystem awareness and campaign communication.',
    descKo:
      '현지 생태계 인지도와 캠페인 커뮤니케이션을 강화합니다.',
    email: 'mailto:partner@korion.io',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  {
    name: 'US Digital Outreach Partner',
    nameKo: '미국 디지털 아웃리치 파트너',
    country: 'United States',
    countryKo: '미국',
    image: null,
    icon: Flag,
    desc:
      'Supports wider international exposure through digital channels and partner outreach.',
    descKo:
      '디지털 채널과 파트너 아웃리치를 통해 국제적 노출 확대를 지원합니다.',
    email: 'mailto:partner@korion.io',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  {
    name: 'Europe Network Partner',
    nameKo: '유럽 네트워크 파트너',
    country: 'Europe',
    countryKo: '유럽권',
    image: null,
    icon: Flag,
    desc:
      'Contributes to strategic communication and regional project positioning.',
    descKo:
      '전략 커뮤니케이션과 지역 내 프로젝트 포지셔닝에 기여합니다.',
    email: 'mailto:partner@korion.io',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  {
    name: 'Global Ambassador Partner',
    nameKo: '글로벌 앰배서더 파트너',
    country: 'Global',
    countryKo: '글로벌',
    image: null,
    icon: Orbit,
    desc:
      'Helps maintain broader project visibility across multiple communities and channels.',
    descKo:
      '여러 커뮤니티와 채널에서 프로젝트의 전반적인 가시성을 유지하고 확대합니다.',
    email: 'mailto:partner@korion.io',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
  {
    name: 'Ecosystem Promotion Partner',
    nameKo: '생태계 홍보 파트너',
    country: 'Multi-Region',
    countryKo: '다중 권역',
    image: null,
    icon: Sparkles,
    desc:
      'Supports ecosystem messaging, campaign spread, and coordinated communication.',
    descKo:
      '생태계 메시지 전달, 캠페인 확산, 협업형 커뮤니케이션을 지원합니다.',
    email: 'mailto:partner@korion.io',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
  },
];

export function TeamSection() {
  const { language, t } = useLanguage();
  const isKo = language === 'KR';
  const ceoImage = useAssetUrl('team-ceo-image', () => import('../../assets/team/jang.jpeg'));
  const devDirectorImage = useAssetUrl('team-dev-director-image', () => import('../../assets/team/seo.jpeg'));
  const partnerAvatarImage = useAssetUrl('team-partner-avatar-image', () => import('../../assets/team/avatar.jpg'));

  const leadershipWithAssets = leadership.map((member) => ({
    ...member,
    image:
      member.name === 'Richard Jang'
        ? ceoImage
        : devDirectorImage,
  }));

  const partnerProfilesWithAssets = partnerProfiles.map((profile) => ({
    ...profile,
    image: profile.image ? partnerAvatarImage : null,
  }));

  return (
    <main className="team-section">
      <section className="team-section__hero">
        <div className="team-section__hero-bg">
          <div className="team-section__orb team-section__orb--one" />
          <div className="team-section__orb team-section__orb--two" />
          <div className="team-section__grid" />
        </div>

        <div className="team-section__container team-section__hero-container">
          <motion.div
            className="team-section__hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="team-section__eyebrow">
              <BadgeCheck size={16} />
              <span>{t('TEAM & PARTNERS', 'TEAM & PARTNERS')}</span>
            </div>

            <h1 className="team-section__title">
              {t(
                'Leadership and a Global Partner Network',
                '운영진의 리더십과 글로벌 파트너 네트워크'
              )}
            </h1>

            <p className="team-section__desc">
              {t(
                'KORION strengthens both project credibility and international reach through the strategic leadership of its core executives and an expanding network of country-level partners.',
                'KORION은 핵심 운영진의 전략적 리더십과 각 국가별 파트너들의 확장 네트워크를 바탕으로 프로젝트 신뢰도와 글로벌 도달 범위를 함께 강화하고 있습니다.'
              )}
            </p>

            <div className="team-section__hero-actions">
              <Link to="/about" className="team-section__btn team-section__btn--ghost">
                <span>{t('View About', '회사소개 보기')}</span>
                <ChevronRight size={18} />
              </Link>
              <div className="team-section__partner-apply">
                <Link to="/partner" className="team-section__btn team-section__btn--partner">
                  <span>{t('Apply as Partner', '파트너 신청')}</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="team-section__leadership">
        <div className="team-section__container">
          <motion.div className="team-section__heading team-section__heading--center" {...fadeUp}>
            <span>{t('LEADERSHIP', 'LEADERSHIP')}</span>
            <h2>{t('Core Leadership', '핵심 운영진')}</h2>
            <p>
              {t(
                'The core leaders responsible for the project’s direction and execution.',
                '프로젝트의 방향성과 실행력을 책임지는 핵심 운영진입니다.'
              )}
            </p>
          </motion.div>

          <div className="team-section__leadership-list">
            {leadershipWithAssets.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.article
                  key={member.name}
                  className="team-section__leader-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="team-section__leader-photo-panel">
                    <div className="team-section__leader-photo-frame">
                      <ImageWithFallback
                        src={member.image || undefined}
                        alt={member.name}
                        className="team-section__leader-photo"
                      />
                    </div>
                    <div className="team-section__leader-role-chip">
                      <Icon size={15} />
                      <span>{isKo ? member.roleKo : member.role}</span>
                    </div>
                  </div>

                  <div className="team-section__leader-content">
                    <div className="team-section__leader-top">
                      <h3>{member.name}</h3>
                    </div>

                    <p className="team-section__leader-summary">
                      {isKo ? member.summaryKo : member.summary}
                    </p>

                    <p className="team-section__leader-bio">
                      {isKo ? member.bioKo : member.bio}
                    </p>

                    <div className="team-section__leader-tags">
                      {(isKo ? member.highlightsKo : member.highlights).map((item) => (
                        <span key={item} className="team-section__leader-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="team-section__socials">
                      <a href={member.email} className="team-section__social" aria-label={`${member.name} email`}>
                        <Mail size={16} />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-section__social"
                        aria-label={`${member.name} linkedin`}
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-section__social"
                        aria-label={`${member.name} instagram`}
                      >
                        <Instagram size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__partners">
        <div className="team-section__container">
          <motion.div className="team-section__heading" {...fadeUp}>
            <span>{t('GLOBAL PARTNERS', 'GLOBAL PARTNERS')}</span>
            <h2>{t('Regional Partner Network', '권역별 파트너 네트워크')}</h2>
            <p>
              {t(
                'KORION works with partners across multiple regions and channels to expand visibility, strengthen community growth, and support ecosystem awareness.',
                'KORION은 다양한 권역과 채널에서 프로젝트 인지도와 커뮤니티 성장을 지원하는 파트너들과 함께 움직이고 있습니다.'
              )}
            </p>
          </motion.div>

          <div className="team-section__partners-grid">
            {partnerRegions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.region}
                  className="team-section__partner-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="team-section__partner-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{isKo ? item.regionKo : item.region}</h3>
                  <p>{isKo ? item.textKo : item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__profiles">
        <div className="team-section__container">
          <motion.div className="team-section__heading" {...fadeUp}>
            <span>{t('PARTNER PROFILES', 'PARTNER PROFILES')}</span>
            <h2>{t('Partner Profile Showcase', '파트너 프로필 소개')}</h2>
            <p>
              {t(
                'To accommodate a growing network, partner profiles are organized in a refined grid designed for scalability, readability, and premium presentation.',
                '확장되는 파트너 네트워크를 수용하기 위해, 파트너 프로필은 확장성·가독성·프리미엄 표현을 고려한 정제된 그리드 구조로 구성됩니다.'
              )}
            </p>
          </motion.div>

          <div className="team-section__profiles-grid">
            {partnerProfilesWithAssets.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={`${item.country}-${item.name}`}
                  className="team-section__profile-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                >
                  <div className="team-section__profile-avatar">
                    {item.image ? (
                      <ImageWithFallback
                        src={item.image || undefined}
                        alt={item.name}
                        className="team-section__profile-image"
                      />
                    ) : (
                      <Icon size={18} />
                    )}
                  </div>

                  <div className="team-section__profile-body">
                    <div className="team-section__profile-country">
                      {isKo ? item.countryKo : item.country}
                    </div>
                    <h3>{isKo ? item.nameKo : item.name}</h3>
                    <p>{isKo ? item.descKo : item.desc}</p>
                    <div className="team-section__socials team-section__socials--partner">
                      <a href={item.email} className="team-section__social" aria-label={`${item.name} email`}>
                        <Mail size={15} />
                      </a>
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-section__social"
                        aria-label={`${item.name} linkedin`}
                      >
                        <Linkedin size={15} />
                      </a>
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-section__social"
                        aria-label={`${item.name} instagram`}
                      >
                        <Instagram size={15} />
                      </a>
                  </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__closing">
        <div className="team-section__container">
          <motion.div className="team-section__closing-panel" {...fadeUp}>
            <div className="team-section__closing-copy">
              <span>{t('TRUST & EXECUTION', 'TRUST & EXECUTION')}</span>
              <h2>
                {t(
                  'Leadership and Network Build Trust Together',
                  '리더십과 네트워크가 함께 프로젝트의 신뢰를 만듭니다'
                )}
              </h2>
              <p>
                {t(
                  'KORION builds a balance of trust and growth through strong leadership execution and the scalability of its global partner network.',
                  'KORION은 운영진의 실행력과 글로벌 파트너 네트워크의 확장성을 바탕으로 신뢰와 성장의 균형을 만들어갑니다.'
                )}
              </p>
            </div>

            <div className="team-section__closing-visual">
              <div className="team-section__closing-orb" />
              <div className="team-section__closing-ring team-section__closing-ring--one" />
              <div className="team-section__closing-ring team-section__closing-ring--two" />
              <div className="team-section__closing-core">
                <ShieldCheck size={28} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

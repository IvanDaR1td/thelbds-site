import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// 你的多语言资源，修正了中文括号问题，示范用部分资源
const resources = {
  en: {
    translation: {
      title: 'The LBDs',
      slogan: 'We Create From What We Lost.',
      description: 'Bunch of Dillettantes doing Something that is unusual',
      placeholder: 'Content coming soon...',
      nav: {
        home: 'Home',
        game: 'Game',
        devlog: 'Devlog',
        team: 'Team'
      },
      game: {
        title: 'No One Was Here.',
        description: 'No One Was Here is not about death, its about whether you choose to see your past.'
      },
      devlog: {
        title: 'Development Log',
        entryTitle: 'Devlog Entry #{{number}}'
      },
      team: {
        title: 'Devs',
        member1: {
          name: 'Ivan Chan',
          role: 'Founder/Story Director/Lead Developer/Soundtrack Composer'
        },
        member2: {
          name: 'Anson Ling Guang Cheng',
          role: 'Founder/Lead Developer'
        },
        member3: {
          name: 'Taydon Ling',
          role: 'Art Director/Co-Developer/Soundtrack Composer'
        },
        member4: {
          name: 'Samuiku',
          role: 'Art Director'
        },
        specialThanks: "Special Thanks: Erennai, Naling"
      }
    }
  },
  zh: {
    translation: {
      title: 'The LBDs',
      slogan: '我们从失去中创造。',
      description: '一群半吊子在做不寻常的事',
      placeholder: '内容即将推出...',
      nav: {
        home: '首页',
        game: '游戏',
        devlog: '开发日志',
        team: '团队'
      },
      game: {
        title: 'No One Was Here(无人所至)',
        description: '无人所至讲述的不是死亡，而是你是否选择看清自己的过去'
      },
      devlog: {
        title: '开发日志',
        entryTitle: '开发日志 #{{number}}'
      },
      team: {
        title: '开发者',
        member1: {
          name: 'Ivan Chan',
          role: '创始人/编剧/首席开发者/配乐作曲家'
        },
        member2: {
          name: 'Anson Ling Guang Cheng',
          role: '创始人/首席开发者'
        },
        member3: {
          name: 'Taydon Ling',
          role: '艺术总监/合作开发者/配乐作曲家'
        },
        member4: {
          name: 'Samuiku',
          role: '艺术总监'
        },
         specialThanks: "特别感谢: Erennai, Naling"
      }
    }
  },
  jp: {
    translation: {
      title: 'LBDsチーム',
      slogan: '失ったものから創造する。',
      description: '記憶とトラウマ、ループ叙述に焦点を当てたインディーチーム。',
      placeholder: '近日公開...',
      nav: {
        home: 'ホーム',
        game: 'ゲーム',
        devlog: '開発ログ',
        team: 'チーム'
      },
      game: {
        title: 'No One Was Here',
        description: '喪失と再生をテーマにした没入型物語体験。'
      },
      devlog: {
        title: '開発ログ',
        entryTitle: '開発ログ #{{number}}'
      },
      team: {
        title: '私たちのチーム',
        member1: {
          name: 'アレックス・チェン',
          role: 'クリエイティブディレクター'
        },
        member2: {
          name: 'マヤ・ロドリゲス',
          role: 'リードデベロッパー'
        },
        member3: {
          name: 'ジェームズ・キム',
          role: 'ナラティブデザイナー'
        },
        member4: {
          name: 'Samuiku',
          role: 'Art Director'
        },
        specialThanks: "Special Thanks: Erennai, Naling"
      }
    }
  }
}

i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next) // 绑定 React-i18next
  .init({
    resources,
    fallbackLng: 'en', // 找不到语言时默认英文
    interpolation: {
      escapeValue: false // React 已经安全处理，不需要转义
    },
    detection: {
      // 可根据需要配置检测顺序，优先级
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    }
  })

export default i18n

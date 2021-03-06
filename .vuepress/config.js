module.exports = {
    title: "Lingi04",
    description: "개발 관련 이것 저것",
    base: "/",
    // theme: "@vuepress/vue",
    themeConfig: {
        logo: "/thumbnail.png",
        footer: "jh",
        nav: [
            { "text": "Study", "link": "/study/", "position": "left", "external": false },
            { "text": "Backend", "link": "/backend/", "position": "left", "external": false },
            { "text": "Programming", "link": "/programming/Immutable", "position": "left", "external": false },
            // { "text": "Linux", "link": "/linux/", "position": "left", "external": false },
            { "text": "Experiences", "link": "/experiences/", "position": "left", "external": false },
            { "text": "About", "link": "/about", "position": "right", "external": false }
        ],
        lastUpdated: 'Last Updated',
        sidebar: {
            '/study/': [{
                title: 'Design Pattern',
                collapsable: false,
                children: [
                    'designpattern/1_observer',
                    'designpattern/2_proxy'
                ]
            }, {
                title: 'Algorithm',
                collapsable: false,
                children: [{
                    title: 'Leet Code',
                    collapsable: true,
                    children: [
                        'algorithm/algorithm_leet_46-50',
                        'algorithm/algorithm_leet_51-60'
                    ]
                }]
            }, {
                title: '책',
                collapsable: false,
                children: [{
                    title: '오브젝트',
                    collapsable: false,
                    children: [
                        'book/object/2-객체지향프로그래밍',
                        'book/object/3-역할_책임_협력',
                        'book/object/4-설계_품질과_트레이드오프',
                        'book/object/5-책임_할당하기',
                        'book/object/6-메시지와_인터페이스',
                        'book/object/7-객체_분해',
                        'book/object/8-의존성_관리하기',
                        'book/object/9-유연한_설계',
                        'book/object/10-상속과_코드_재사용',
                        'book/object/11-합성과_유연한_설계',
                        'book/object/12-다형성',
                        'book/object/15-디자인_패턴과_프레임워크'
                    ]
                }, {
                    title: '이펙티브자바',
                    collapsable: false,
                    children: [{
                        title: '4. 클래스와 인터페이스',
                        collapsable: true,
                        children: [
                            'book/effectivejava/4-class-and-interface/rule15',
                            'book/effectivejava/4-class-and-interface/rule16',
                            'book/effectivejava/4-class-and-interface/rule18',
                            'book/effectivejava/4-class-and-interface/rule20',
                            'book/effectivejava/4-class-and-interface/rule21',
                            'book/effectivejava/4-class-and-interface/rule22',
                            'book/effectivejava/4-class-and-interface/rule23',
                            'book/effectivejava/4-class-and-interface/rule24',
                            'book/effectivejava/4-class-and-interface/rule25'
                        ]
                    }, {
                        title: '5. 제네릭',
                        collapsable: true,
                        children: [
                            'book/effectivejava/5-generic/rule26',
                            'book/effectivejava/5-generic/rule27',
                            'book/effectivejava/5-generic/rule28',
                            'book/effectivejava/5-generic/rule29',
                            'book/effectivejava/5-generic/rule30',
                            'book/effectivejava/5-generic/rule31',
                            'book/effectivejava/5-generic/rule33'
                        ]
                    }, {
                        title: '7. 람다와 스트림',
                        collapsable: true,
                        children: [
                            'book/effectivejava/7-lambda-and-stream/rule42',
                            'book/effectivejava/7-lambda-and-stream/rule43',
                            'book/effectivejava/7-lambda-and-stream/rule44',
                            'book/effectivejava/7-lambda-and-stream/rule45',
                            'book/effectivejava/7-lambda-and-stream/rule46',
                            'book/effectivejava/7-lambda-and-stream/rule47',
                            'book/effectivejava/7-lambda-and-stream/rule48'
                        ]
                    }, {
                        title: '8. 메서드',
                        collapsable: true,
                        children: [
                            'book/effectivejava/8-method/rule49',
                            'book/effectivejava/8-method/rule50',
                            'book/effectivejava/8-method/rule51'
                        ]
                    }]
                }]
            }],
            '/backend/': [{
                title: 'Spring Boot',
                collapsable: false,
                children: [
                    'springboot/annotation',
                    'springboot/jpa',
                    'springboot/pojo-javabeans-vo-dto',
                    {
                        title: 'Spring Security',
                        collapsable: true,
                        children: [
                            'springboot/security/1_index',
                            'springboot/security/2_config',
                            'springboot/security/3_인증방식',
                            'springboot/security/4_filter',
                            'springboot/security/5_provider',
                            'springboot/security/6_entrypoint',
                            'springboot/security/7_exceptions'
                        ]
                    }

                ]
            }, {
                title: 'Elastic Search',
                collapsable: false,
                children: [
                    'es/1_세팅',
                    'es/2_매핑',
                    'es/4_DB와 비교',
                    'es/5_성능최적화',
                    'es/6_alias'

                ]
            }, {
                title: 'OAuth2',
                collapsable: false,
                children: [
                    'oauth2/1_overview',
                    'oauth2/2_grant_type'
                ]
            }],
            '/frontend/': [{
                title: 'Angular',
                collapsable: false,
                children: [
                    //_others
                ]
            }, {
                title: 'Vue',
                collapsable: false,
                children: [
                    //_others
                ]
            }],
            '/programming/': [{
                title: '프로그래밍',
                collapsable: false,
                children: [
                    'Immutable',
                    'enum'
                ]
            }],
            '/linux/': [{
                title: 'Linux 운영',
                collapsable: false,
                children: [
                    '1_자주_쓰는_명령어',
                    '2_nohup',
                    '3_kill_과_trap',
                    '4_so_파일_만들기',
                    '5_install_gcc_without_internet_connection',
                    //_linux운영
                ]
            }],
            '/experiences/': [{
                title: 'Experiences',
                collapsable: false,
                children: [
                    '1-deadlock_exception',
                    '2-Autowired와_AOP',
                    '3-kill과_trap',
                    //_db{
                    {
                        title: '깨끗한 코드',
                        collapsable: true,
                        children: [
                            'refactoring/1_intro',
                            'refactoring/2_목표설명',
                            'refactoring/3_적용',
                            'refactoring/4_적용2'
                        ]
                    }
                    // , {
                    //     title: '과제 풀이',
                    //     collapsable: true,
                    //     children: [
                    //         'homework-review/1-intro',
                    //         'homework-review/2-설계'
                    //     ]
                    // }
                ]
            }],
            // fallback
            '/': []
        }
    },
    head: [
        // ['link', { rel: "icon", href:  }]
    ],
    markdown: {
        anchor: {
            permalink: false
        }
    },

};
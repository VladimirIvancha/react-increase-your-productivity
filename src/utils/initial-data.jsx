const initialMenuItemsData = [
  {
    itemClassName: "header__textMenu-item",
    id: "home-menuItem",
    ref: "#header",
    linkClassName: "header__textMenu-link",
    name: "Home",
  },
  {
    itemClassName: "header__textMenu-item",
    id: "blog-menuItem",
    ref: "#blog",
    linkClassName: "header__textMenu-link",
    name: "Blog",
  },
  {
    itemClassName: "header__textMenu-item",
    id: "features-menuItem",
    ref: "#features",
    linkClassName: "header__textMenu-link",
    name: "Features",
  },
  {
    itemClassName: "header__textMenu-item",
    id: "pricing-menuItem",
    ref: "#getStarted",
    linkClassName: "header__textMenu-link",
    name: "Pricing",
  },
  {
    itemClassName: "header__textMenu-item",
    id: "documentation-menuItem",
    ref: "#getStarted",
    linkClassName: "header__textMenu-link",
    name: "Documentation",
  },
  // {
  //     itemClassName: "",
  //     id: "",
  //     ref: "",
  //     name: "",
  // },
];

const initialMenuIconsData = [
  {
    id: "facebook-icon",
    ref: "https://facebook.com",
    className: "facebook-icon",
  },
  {
    id: "telegram-icon",
    ref: "https://telegram.com",
    className: "telegram-icon",
  },
  {
    id: "twitter-icon",
    ref: "https://twitter.com",
    className: "twitter-icon",
  },
  {
    id: "m-icon",
    ref: "https://myspace.com",
    className: "m-icon",
  },
  // {
  //   id: '',
  //   ref: '',
  //   className: '',
  // },
];

const initialMenuLogoData = [
  {
    id: "bitbucket-logo",
    ref: "https://bitbucket.org/",
    className: "bitbucket-logo",
  },
  {
    id: "appleWatch-logo",
    ref: "http://apple.com",
    className: "appleWatch-logo",
  },
  {
    id: "facebook-logo",
    ref: "http://facebook.com",
    className: "facebook-logo",
  },
  {
    id: "atlassian-logo",
    ref: "https://www.atlassian.com/",
    className: "atlassian-logo",
  },
  {
    id: "audi-logo",
    ref: "https://audi.com",
    className: "audi-logo",
  },
  // {
  //   id: '',
  //   ref: '',
  //   className: '',
  // },
];

const introPhpTextArea = {
  textAreaClass: "intro__textArea",
  p1Class: "intro__subtitle",
  p1Text: "Plan your life",
  hClass: "intro__title",
  hText: "Increase your productivity",
  p2Class: "intro__text",
  p2Text:
    "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.",
};

const planAndManagePhpTextArea = {
  textAreaClass: "planAndManage__textArea",
  p1Class: "planAndManage__subtitle",
  p1Text: "Plan and manage",
  hClass: "planAndManage__title",
  hText: "Increase your productivity",
  p2Class: "planAndManage__text",
  p2Text:
    "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.",
};

const featuresPhTextArea = {
  textAreaClass: "features__textArea",
  p1Class: "features__subtitle",
  p1Text: "About us",
  hClass: "features__title",
  hText: "Read about our app",
};

const initialMenuFeaturesData = [
  {
    id: "Overwiew",
    mainClassName: "features__item",
    figureClassName: "features__icon features__icon_overview",
    textAreaClass: "features__itemTextArea",
    hClass: "features__item-title",
    hText: "Overwiew",
    p1Class: "features__item-text",
    p1Text: "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.",
  },
  {
    id: "Files",
    mainClassName: "features__item",
    figureClassName: "features__icon features__icon_files",
    textAreaClass: "features__itemTextArea",
    hClass: "features__item-title",
    hText: "Files",
    p1Class: "features__item-text",
    p1Text: "No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.",
  },
  {
    id: "Meeting chats",
    mainClassName: "features__item",
    figureClassName: "features__icon features__icon_meetingChats",
    textAreaClass: "features__itemTextArea",
    hClass: "features__item-title",
    hText: "Meeting chats",
    p1Class: "features__item-text",
    p1Text: "Vim ne tacimates neglegentur. Erat diceret omittam at est.",
  },
  {
    id: "Save events",
    mainClassName: "features__item",
    figureClassName: "features__icon features__icon_saveEvents",
    textAreaClass: "features__itemTextArea",
    hClass: "features__item-title",
    hText: "Save events",
    p1Class: "features__item-text",
    p1Text: "Nisl idque mel ea, nominati voluptatum.",
  },
  // {
  //   id: "",
  //   mainClassName: "",
  //   figureClassName: "",
  //   textAreaClass: "",
  //   hClass: "",
  //   hText: "",
  //   p1Class: "",
  //   p1Text: "",
  // },
];

const initialStatsData = [
  {
    id: "stats__increased-item",
    mainClassName: "stats__item stats__item_left",
    figureClassName: "stats__increased-item",
    textAreaClass: "stats__itemTextArea stats__itemTextArea_left",
    hClass: "stats__item-title stats__item-title_white",
    hText: "89%",
    pClass: "stats__item-text stats__item-text_white",
    pText: "Customers who have increased their productivity",
  },
  {
    id: "stats__used-item",
    mainClassName: "stats__item stats__item_right",
    figureClassName: "stats__used-item",
    textAreaClass: "stats__itemTextArea stats__itemTextArea_right",
    hClass: "stats__item-title stats__item-title_blue",
    hText: "3123",
    pClass: "stats__item-text stats__item-text_blue",
    pText: "Users who have used our application",
  },
  // {
  //   id: "",
  //   mainClassName: "",
  //   figureClassName: "",
  //   textAreaClass: "",
  //   hClass: "",
  //   hText: "",
  //   p1Class: "",
  //   p1Text: "",
  // },
]

const blogPhTextArea = {
  textAreaClass: "blog__phTextArea",
  p1Class: "blog__phSubtitle",
  p1Text: "Our resources",
  hClass: "blog__phTitle",
  hText: "Start reading our blog",
};

const initialBlogData = [
  {
    id: 'blog-slide-01',
    pic1ClassName: 'blog__pic blog__pic_main',
    pic2ClassName: 'blog__pic blog__pic_table',
    pic3ClassName: 'blog__pic blog__pic_man',
    textAreaClass: "blog__hpTextArea",
    hClass: "blog__hpTitle",
    hText: "How to start planning",
    pClass: "blog__hpSubtitle",
    pText: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...",
  },
  {
    id: 'blog-slide-02',
    pic1ClassName: 'blog__pic blog__pic_main-01',
    pic2ClassName: 'blog__pic blog__pic_table-01',
    pic3ClassName: 'blog__pic blog__pic_man-01',
    textAreaClass: "blog__hpTextArea",
    hClass: "blog__hpTitle",
    hText: "How to start planning",
    pClass: "blog__hpSubtitle",
    pText: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...",
  },
  {
    id: 'blog-slide-03',
    pic1ClassName: 'blog__pic blog__pic_main-02',
    pic2ClassName: 'blog__pic blog__pic_table',
    pic3ClassName: 'blog__pic blog__pic_man-01',
    textAreaClass: "blog__hpTextArea",
    hClass: "blog__hpTitle",
    hText: "How to start planning",
    pClass: "blog__hpSubtitle",
    pText: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...",
  },
]

const quotesPhpTextArea = {
  textAreaClass: "quotes__textArea",
  p1Class: "quotes__subtitle",
  p1Text: "Testimonials",
  hClass: "quotes__title",
  hText: "Customers's quotes",
  p2Class: "quotes__text",
  p2Text:
    "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.",
};

const initialQuotesData = [
  {
    id: 'john-brown-quote',
    containerClassName: "quotes__item-container",
    mainClassName: "quotes__item",
    textAreaClass: "quotes__pTextArea",
    p1Class: "quotes__pText",
    p1Text: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    quotePerson: "quotes__person quotes__person_john-brow",
  },
  {
    id: 'jack-black-quote',
    containerClassName: "quotes__item-container",
    mainClassName: "quotes__item",
    textAreaClass: "quotes__pTextArea",
    p1Class: "quotes__pText",
    p1Text: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    quotePerson: "quotes__person quotes__person_jack-black",
  },
  {
    id: 'lionel-messi-quote',
    containerClassName: "quotes__item-container",
    mainClassName: "quotes__item",
    textAreaClass: "quotes__pTextArea",
    p1Class: "quotes__pText",
    p1Text: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    quotePerson: "quotes__person quotes__person_lionel-messi",
  },
  {
    id: 'kurt-russel-quote',
    containerClassName: "quotes__item-container",
    mainClassName: "quotes__item",
    textAreaClass: "quotes__pTextArea",
    p1Class: "quotes__pText",
    p1Text: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    quotePerson: "quotes__person quotes__person_kurt-russel",
  },
  {
    id: 'demi-moor-quote',
    containerClassName: "quotes__item-container",
    mainClassName: "quotes__item",
    textAreaClass: "quotes__pTextArea",
    p1Class: "quotes__pText",
    p1Text: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    quotePerson: "quotes__person quotes__person_demi-moor",
  },
  {
    id: 'kristina-ricci-quote',
    containerClassName: "quotes__item-container",
    mainClassName: "quotes__item",
    textAreaClass: "quotes__pTextArea",
    p1Class: "quotes__pText",
    p1Text: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    quotePerson: "quotes__person quotes__person_kristina-ricci",
  },
  {
    id: 'empty-quote',
    containerClassName: "",
    mainClassName: "",
    textAreaClass: "",
    p1Class: "",
    p1Text: "",
    quotePerson: "",
  },
]

const faqPhTextArea = {
  textAreaClass: "faq__phTextArea",
  p1Class: "faq__phSubtitle",
  p1Text: "Customer help",
  hClass: "faq__phTitle",
  hText: "Frequently asked questions",
};

const initialMenuFaqData = [
  {
    id: "faq-01",
    mainClassName: "faq__item",
    faqHeaderClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_question",
    faqArrowClassName: "faq__arrow",
    faqArrowClassNameActive: "faq__arrow faq__arrow_active",
    questionClassName: "faq__question",
    questionClassNameActive: "faq__question faq__question_active",
    questionText: "Reque insolens in vel?",
    faqBodyClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body",
    faqBodyClassNameActive: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body faq__wrapper_active",
    answerClassName: "faq__answer",
    answerText: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    faqBtnClass: "faq__actionButton",
    btnText: "Go to documentation",
    faqLineClassName: "faq__line"
  },
  {
    id: "faq-02",
    mainClassName: "faq__item",
    faqHeaderClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_question",
    faqArrowClassName: "faq__arrow",
    faqArrowClassNameActive: "faq__arrow faq__arrow_active",
    questionClassName: "faq__question",
    questionClassNameActive: "faq__question faq__question_active",
    questionText: "Vis rebum error graecis ea, id sit postea accusamus?",
    faqBodyClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body",
    faqBodyClassNameActive: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body faq__wrapper_active",
    answerClassName: "faq__answer",
    answerText: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    faqBtnClass: "faq__actionButton",
    btnText: "Go to documentation",
    faqLineClassName: "faq__line"
  },
  {
    id: "faq-03",
    mainClassName: "faq__item",
    faqHeaderClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_question",
    faqArrowClassName: "faq__arrow",
    faqArrowClassNameActive: "faq__arrow faq__arrow_active",
    questionClassName: "faq__question",
    questionClassNameActive: "faq__question faq__question_active",
    questionText: "Lorem repudiandae ne nec?",
    faqBodyClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body",
    faqBodyClassNameActive: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body faq__wrapper_active",
    answerClassName: "faq__answer",
    answerText: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    faqBtnClass: "faq__actionButton",
    btnText: "Go to documentation",
    faqLineClassName: "faq__line"
  },
  {
    id: "faq-04",
    mainClassName: "faq__item",
    faqHeaderClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_question",
    faqArrowClassName: "faq__arrow",
    faqArrowClassNameActive: "faq__arrow faq__arrow_active",
    questionClassName: "faq__question",
    questionClassNameActive: "faq__question faq__question_active",
    questionText: "Ad dicit numquam vel. Et eos iudico feugait percipitur?",
    faqBodyClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body",
    faqBodyClassNameActive: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body faq__wrapper_active",
    answerClassName: "faq__answer",
    answerText: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    faqBtnClass: "faq__actionButton",
    btnText: "Go to documentation",
    faqLineClassName: "faq__line"
  },
  {
    id: "faq-05",
    mainClassName: "faq__item",
    faqHeaderClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_question",
    faqArrowClassName: "faq__arrow",
    faqArrowClassNameActive: "faq__arrow faq__arrow_active",
    questionClassName: "faq__question",
    questionClassNameActive: "faq__question faq__question_active",
    questionText: "Sea no dico percipitur. Fierent constituam definitiones id eum?",
    faqBodyClassName: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body",
    faqBodyClassNameActive: "faq__wrapper faq__wrapper_horizontal faq__wrapper_body faq__wrapper_active",
    answerClassName: "faq__answer",
    answerText: "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
    faqBtnClass: "faq__actionButton",
    btnText: "Go to documentation",
    faqLineClassName: "faq__line"
  },
];

const getStartedPhHhpTextArea = {
  textAreaClass: "getStarted__textArea",
  p1Class: "getStarted__subtitle",
  p1Text: "Plan your life",
  wrapperClass: "getStarted__textAreaWrapper",
  h3Class: "getStarted__h3Title",
  hTexth1: "Get",
  h2Class: "getStarted__h3Title getStarted__h3Title_bold",
  hTexth2: "started",
  hTexth3: "now",
  p2Class: "getStarted__text",
  p2Text:
    "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.",
};

const newsletterHpTextArea = {
  textAreaClass: "newsletter__hpTextArea",
  hClass: "newsletter__hpTitle",
  hText: "Sign up for newsletter",
  pClass: "newsletter__hpSubtitle",
  pText: "Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.",
};

export {
  initialMenuItemsData,
  initialMenuIconsData,
  initialMenuLogoData,
  introPhpTextArea,
  planAndManagePhpTextArea,
  featuresPhTextArea,
  initialMenuFeaturesData,
  initialStatsData,
  blogPhTextArea,
  initialBlogData,
  quotesPhpTextArea,
  initialQuotesData,
  faqPhTextArea,
  initialMenuFaqData,
  getStartedPhHhpTextArea,
  newsletterHpTextArea,
};

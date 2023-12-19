function sendLinkCustom() {
    if (!Kakao.isInitialized()) {
      Kakao.init('https://developers.kakao.com/sdk/js/kakao.js');
    }
    Kakao.Link.sendCustom({
        templateId: [101797]
    });
  }
  
  try {
    function sendLinkDefault() {
      if (!Kakao.isInitialized()) {
        Kakao.init("0db18cee9fb123f2eac1670d86906511");
      }
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '재미로 보는 디즈니 공주 테스트',
          description: '#디즈니 #MBTI #심리테스트',
          imageUrl:
            'https://i0.wp.com/overthebigmoon.com/wp-content/uploads/2015/06/disney-princess-printables.jpg?resize=460%2C575&ssl=1/',
          link: {
            mobileWebUrl: 'https://project05-disney-mbti.netlify.app/',
            webUrl: 'https://project05-disney-mbti.netlify.app/',
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://project05-disney-mbti.netlify.app/',
              webUrl: 'https://project05-disney-mbti.netlify.app/',
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'https://project05-disney-mbti.netlify.app/',
              webUrl: 'https://project05-disney-mbti.netlify.app/',
            },
          },
        ],
      })
    }
  ; window.kakaoDemoCallback && window.kakaoDemoCallback() }
  catch(e) { window.kakaoDemoException && window.kakaoDemoException(e) }
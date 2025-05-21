const imgList = [
    {type:'male', img:'images/p1.jpg', title:'Mametchi', desc:' 초기 다마고치의 주인공. 토끼귀를 가지고 있다. 공부도 스포츠도 매우 좋아하고, 매사에 열심히 하는 다마고치.'},
    {type:'female', img:'images/p2.jpg', title:'Mimitchi', desc:'성격이 온화하고 마이페이스한 다마고치. 계산을 매우 좋아하고, 자습도 특기, 사실은 지기 싫어하고 노력가인 면도 있다.'},
    {type:'male', img:'images/p3.jpg', title:'Kuchipatchi', desc:'마메치의 가장 친한 친구. 매우 상냥한 성격으로, 맛있는 것을 대단히 좋아하는 먹보인 다마고치. 온 가족이 함께 느긋하고 온천과 태어나고 자란 외딴 숲의 자연을 아주 좋아한다.'},
    {type:'female', img:'images/p4.jpg', title:'Lovelitchi', desc:'엄청나게 착한 성격이며, 러블린이라는 예명으로 다마고치 타운에서 가장 인기 있는 아이돌이다. 가수, 기자 그리고 종종 텔레비전 쇼의 주인공으로서 많은 활동에 출연한다. 인기 아이돌인 탓에 빡빡한 일정을 소화하고 있다.'},
    {type:'male', img:'images/p5.jpg', title:'Kuromametchi', desc:' 항상 쿨하다. 마메치와 마찬가지로 공부도 스포츠도 특기. 하지만 주변 친구와 막 붙임성 있게 지내지는 않는다. 러블린의 숨은 팬으로, 방에 러블린의 포스터나 카드가 많이 장식되어 있다.'},
    {type:'female', img:'images/p6.jpg', title:'Memetchi', desc:'매우 스타일리시하고, 여성스럽고, 아이처럼 즐거운 시간을 보내는 것을 좋아하는 다마고치. 공상하기, 춤추기, 변장하기, 그리고 소용돌이치는 모든 것을 즐긴다.'},
    {type:'male', img:'images/p7.jpg', title:'Kikitchi', desc:'고집이 세고 자기중심적인 성격을 가졌다. 어릴 적 큰 귀에 대한 괴롭힘으로 마음을 닫았지만, 친구들과 부모님의 관심 덕분에 점점 마음을 열게 되었다. 운동 신경이 좋고 바나나를 좋아하며, 귀신을 무서워하는 겁 많은 면도 있다.'},
    {type:'male', img:'images/p8.jpg', title:'Pochitchi', desc:'강아지처럼 생긴 다마고치로, 착하고 배려심이 깊다. 비스킷을 좋아하고 드라이브를 즐기지만 자전거는 탈 줄 모른다. 장난기가 많아 여기저기에 영역 표시를 하며, 다른 다마고치들이 이를 놀리면 부끄러워한다. 짖거나 턱하프를 연주하며 의사소통하기도 한다.'},
    {type:'male', img:'images/p9.jpg', title:'Gozarutchi', desc:' 일본의 닌자를 동경하여, 날마다 수행에 힘 쓰고있다. 은신술, 수리검 던지기, 나무 위로 이동 등이 특기. 주위에는 상냥하고 자신에게는 엄격한 성격이지만, 의외로 미하한 점도 있다.'},
    {type:'male', img:'images/p10.jpg', title:'Oyajitch', desc:'술을 좋아하는 다마고치. 아버지나 삼촌같은 거칠고 투박한 성격을 가지고 있다. 그가 가장 좋아하는 유머는 아재 개그다.'},
    {type:'female', img:'images/p11.jpg', title:'Violetchi', desc:'마음이 부드럽고 털털하며 꽃과 원예에 대한 지식이 풍부하다. 그녀는 꽃에 대해 깊이 이해하고 있다.  꽃의 이외에도 분홍색, 그림, 자전거 타기를 좋아한다.'},
    {type:'female', img:'images/p12.jpg', title:'Watawatatchi', desc:'느긋하고 푹신푹신한 것을 아주 좋아하는 부끄러움 많이 타는 다마고치. 동물들의 말을 알아들을 수 있어 동물 통역사로 활약하기도 한다.'},
    {type:'female', img:'images/p13.jpg', title:'Nijifuwatchi', desc:'무지개색 물체와 솜털 같은 것을 좋아한다. 니지후왓치의 몸은 성격만큼이나 가볍고 보송보송하며, 재능 있는 시인이다. 그렇게 가볍지만, 놀랄 만큼 강해질 수 있다.'},
    {type:'female', img:'images/p14.jpg', title:'Ichigotchi', desc:'뒤집은 딸기처럼 생긴 다마고치로, 몸 한쪽에는 딸기 씨가 몇 개 있으며, 보통 다섯 개지만 때때로 더 많기도 하다. 노래하고 춤추는 것을 좋아하며 매일 즐긴다. 친절하고 밝은 성격이지만, 헷갈리는 말을 듣거나 머리 위 씨를 세는 걸 싫어한다. '},
    {type:'male', img:'images/p15.jpg', title:'Ginjirotchi', desc:'독립적이고 이해심 많은 다마고치로, 명랑하고 상냥하며 주변을 잘 챙기는 성격이다. 감수성이 풍부해 눈물을 보이는 일도 종종 있다. 밝고 활기찬 성격으로 알려져 있으며, 몸을 빙글빙글 돌리며 점프하면 잠시 공중에 떠 있는 능력이 있다.'},
    {type:'male', img:'images/p16.jpg', title:'Maskutchi', desc:'똑똑하고 배우는 것을 좋아하는 다마고치다. 조용한 성격이며, 가만히 다른 다마고치를 바라보며 관찰하는 습관이 있다.'}
]
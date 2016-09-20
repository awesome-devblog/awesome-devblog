var fs = require('fs');
var opml = require('opml-generator');

var header = {
  "title": "Korea-Dev-RSS"
};

// sources 는 여기에서..http://codepen.io/sarojaba/pen/MYOroq

var feeds = {
    강규영: 'http://www.ecogwiki.com/sp.posts?_type=atom',
    강대명: 'https://charsyam.wordpress.com/feed/',
    강성훈: 'http://j.mearie.org/rss',
    구종만: 'http://feeds.feedburner.com/theyearlyprophet/GGGO?format=xml',
    권남: 'http://rss.egloos.com/blog/kwon37xi',
    권정혁: 'http://feeds.feedburner.com/xguru?format=xml',
    권창현: 'http://thoughts.chkwon.net/feed/',
    김광현: 'http://kwang82.hankyung.com/feeds/posts/default',
    김국현: 'http://feeds.feedburner.com/goodhyun',
    김놀부: 'http://nolboo.github.io/feed.xml',
    김명준: 'http://html5lab.kr/feed/',
    김민수: 'http://www.kmshack.kr/rss',
    김민장: 'http://rss.egloos.com/blog/minjang',
    김범준: 'http://bomjun.tistory.com/rss',
    김병환: 'http://kimbyeonghwan.tumblr.com/rss',
    김성현: 'http://greemate.tistory.com/rss',
    김성훈: 'http://www.se.or.kr/rss',
    김수보: 'https://subokim.wordpress.com/feed/',
    김슬기: 'http://blog.seulgi.kim/feeds/posts/default',
    김용묵: 'http://moogi.new21.org/tc/rss',
    김용환: 'http://knight76.tistory.com/rss',
    김용현: 'http://blog.rss.naver.com/drvoss.xml',
    김우승: 'https://kimws.wordpress.com/feed/',
    김원일: 'http://androidkr.blogspot.com/feeds/posts/default',
    김재호: 'http://feeds.feedburner.com/crazytazo?format=xml',
    김진국: 'http://forensic-proof.com/feed',
    김진욱: 'http://feeds.feedburner.com/reinblog',
    김창원: 'http://www.memoriesreloaded.net/feeds/posts/default',
    김창준: 'http://rss.egloos.com/blog/agile',
    김코딩: 'http://huns.me/feed',
    김태곤: 'http://taegon.kim/feed',
    김태균: 'http://feeds.feedburner.com/GaeraeBlog?format=xml',
    김태기: 'https://beyondj2ee.wordpress.com/feed/',
    김태호: 'http://androidhuman.com/rss',
    김현유: 'http://www.mickeykim.com/rss',
    김형준: 'http://www.gisdeveloper.co.kr/rss',
    김환희: 'http://rss.egloos.com/blog/greentec',

    남정현: 'http://www.rkttu.com/atom',
    노용환: 'http://bugsfixed.blogspot.com/feeds/posts/default',
    류광: 'http://occamsrazr.net/tt/index.xml',
    류종택: 'http://ryulib.tistory.com/rss',
    문형환: 'http://blog.lael.be/feed',

    박경훈: 'http://hoonsbara.tistory.com/rss',
    박민근: 'http://agebreak.blog.me/rss',
    박상길: 'http://likejazz.com/rss',
    박상민: 'https://sangminpark.wordpress.com/feed/',
    박일: 'http://rss.egloos.com/blog/parkpd',
    박정규: 'http://bagjunggyu.blogspot.com/feeds/posts/default',
    방준영: 'http://feeds.feedburner.com/junyoung?format=xml',
    배기홍: 'http://feeds.feedburner.com/baenefit/slXh',
    백기선: 'http://whiteship.me/?feed=rss2',
    범이: 'http://blog.daum.net/xml/rss/funfunction',
    변정훈: 'http://feeds.feedburner.com/rss_outsider_dev?format=xml',
    변수민: 'http://blog.suminb.com/feed.xml',

    서광열: 'http://gamecodingschool.org/feed/',
    서주영: 'http://rss.egloos.com/blog/seoz',
    손영수: 'https://arload.wordpress.com/feed/',
    송성광: 'http://blog.saltfactory.net/feed',
    송주성: 'http://emptydream.tistory.com/rss',
    신승환: 'http://www.talk-with-hani.com/rss',
    신영진: 'http://feeds.feedburner.com/codewiz',
    신현묵: 'http://zetlos.tistory.com/rss',
    신현석: 'http://hyeonseok.com/rss/',

    안윤호: 'http://toyfab.tistory.com/rss',
    안종태: 'http://qnibus.com/feed/',
    양병규: 'http://blog.rss.naver.com/delmadang.xml',
    염재현: 'https://only2sea.wordpress.com/feed/',
    오광신: 'http://kwangshin.pe.kr/blog/feed/',
    오동권: 'http://www.flowdas.com/blog/feeds/rss/',
    오현석: 'http://www.enshahar.me/feeds/posts/default',
    용현택: 'http://yonght.tumblr.com/rss',
    윤석찬: 'http://feeds.feedburner.com/channy',
    윤영식: 'http://mobicon.tistory.com/rss',
    윤창석: 'http://changsuk.me/?feed=rss2',
    이규원: 'https://justhackem.wordpress.com/feed/',
    이도현: 'http://genesis8.tistory.com/rss',
    이병준: 'http://www.buggymind.com/rss',
    이상욱: 'http://feeds.feedburner.com/sangwook?format=xml',
    이성규: 'http://www.shalomeir.com/feed/',
    이성호: 'http://blog.scaloid.org/feeds/posts/default',
    이세우: 'http://blog.xcoda.net/rss',
    이윤창: 'http://daddycat.blogspot.com/feeds/posts/default',
    이재홍: 'http://feeds.feedburner.com/pyrasis?format=xml',
    임지훈: 'http://www.jimmyrim.com/rss',

    장선진: 'http://blog.java2game.com/rss',
    장요셉: 'http://blog.lastmind.net/feed',
    장용석: 'http://devyongsik.tistory.com/rss',
    장혜식: 'http://openlook.org/wp/feed/',
    전규현: 'http://feeds.feedburner.com/allofsoftware?format=xml',
    전동규: 'http://www.php5.me/blog/feed/',
    전희원: 'http://feeds.feedburner.com/gogamza?format=xml',
    정도현: 'http://www.moreagile.net/feeds/posts/default',
    정재화: 'http://blrunner.com/rss',
    정상혁: 'http://rss.egloos.com/blog/benelog',
    정성태: 'http://www.sysnet.pe.kr/rss/getrss.aspx?boardId=635954948',
    정지훈: 'http://health20.kr/rss',
    조병욱: 'http://bcho.tistory.com/rss',
    조성문: 'http://sungmooncho.com/feed/',
    조승연: 'http://blog.kivol.net/rss',
    조영호: 'http://rss.egloos.com/blog/aeternum',
    진성주: 'http://softwaregeeks.org/feed/',

    채수원: 'http://blog.doortts.com/rss',
    최범균: 'http://javacan.tistory.com/rss',
    최흥배: 'http://jacking.tistory.com/rss',

    하호진: 'http://feeds.feedburner.com/Smartmob',
    한승훈: 'http://kkamagui.tistory.com/rss',
    한정현: 'http://blog.kazikai.net/?feed=rss2',
    허준회: 'https://joone.wordpress.com/feed/',
    홍민희: 'http://blog.dahlia.kr/rss',
    홍성철: 'http://blog.fupfin.com/?feed=rss2',
    황장호: 'http://xrath.com/feed/',
    황상철: 'http://pragmaticstory.com/feed/',
    히언: 'http://rss.egloos.com/blog/recipes',
    현승: 'http://iam-hs.com/rss',

    게임개발포에버: 'http://feeds.feedburner.com/gamedevforever?format=xml',
    네이버: 'http://d2.naver.com/d2.atom',
    넥스트리: 'http://www.nextree.co.kr/feed/',
    삼성소프트웨어멤버십: 'http://blog.secmem.org/rss',
    아이디인큐: 'https://blogs.idincu.com/dev/feed/',
    알스퀘어: 'http://dev.rsquare.co.kr/feed/',
    에이콘: 'http://feeds.feedburner.com/acornpub',
    엠비안: 'http://blog.embian.com/rss',
    위클립스: 'http://eclipse.or.kr/index.php?title=특수기능:최근바뀜&feed=atom',
    이상한모임: 'http://blog.weirdx.io/feed/',
    이음소시어스: 'http://bigmatch.i-um.net/feed/',
    인사이트: 'http://blog.insightbook.co.kr/rss',
    코딩뉴스: 'http://www.codingnews.net/?feed=rss2',
    테크수다: 'http://www.techsuda.com/feed',
    티몬: 'http://tmondev.blog.me/rss',
    한국게임기획자모임: 'http://gameplanner.cafe24.com/feed/',
    SK플래닛: 'http://feeds.feedburner.com/skpreadme?format=xml',
    VCNC: 'http://engineering.vcnc.co.kr/atom.xml',
    Google: 'http://feeds.feedburner.com/GoogleDevelopersKorea?format=xml',
    Mozilla: 'http://hacks.mozilla.or.kr/feed/',
    Spoqa: 'http://spoqa.github.io/rss',
    VCNC: 'http://engineering.vcnc.co.kr/atom.xml',
};

var body = [];

for(var key in feeds){
  var feed = { title: key, type: 'rss' ,"xmlUrl": feeds[key] };
  body.push(feed);
}

var outlines = [{
  text: 'KORDEV',
  title: 'KORDEV',
  _children : body
}];

var result = opml(header, outlines);// => XML

fs.writeFile('./Korea-Dev-RSS.opml', result, function(err) {
  if(err) throw err;
  console.log('File write completed');
});

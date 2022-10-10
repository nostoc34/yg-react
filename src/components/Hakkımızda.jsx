import React from "react";

function Hakkımızda() {
  return (
    <section id="hakkimizda">
      <h1 className="title">HAKKIMIZDA</h1>
      <div className="hak-container container">
        <div className="row hak-row">
          <div className="about col-lg-4 col-xs-12">
            <h1 className="altbaslik">BİZ KİMİZ?</h1>
            <p>
              Konya Teknik Üniversitesi yazılım Geliştirme Topluluğu, bilgisayar
              ve yazılım mühendisliği öğrencileri tarafından 2022'de kuruldu.
              Web ve mobil alanına ilgi duyan öğrencilerin çalışma grupları
              kurarak bilgi alışverişi yaptıkları ve bu alanda kendilerini
              geliştirdikleri bir topluluktur. Aynı zamanda konuda uzman kişiler
              tarafından verilen seminerlerle bilgi birikimini attıran
              etkinlikler yapmaktadır.
            </p>
          </div>

          <div className="about col-lg-4 col-xs-12">
            <h1 className="altbaslik">NE YAPARIZ?</h1>
            <p>
              Web ve mobil alanında ayrı ayrı olmak üzere çalışma grupları
              oluşturulmaktadır. Bu çalışma grupları ile bilgi birikimini
              arttırmak amacıyla çeşitli ödevlendirmeler ve dersler
              verilmektedir. Aynı zamanda bilgi ve tecrübelerini bizlerle
              paylaşması için konuda uzman kişiler tarafından seminerler
              düzenlenmektedir. Sadece bilgi içerikli değil aynı zamanda sosyal
              anlamda tanışmak ve kaynaşmak amacıyla çeşitli etkinlikler
              yapılmaktadır.
            </p>
          </div>

          <div className="about col-lg-4 col-xs-12">
            <h1 className="altbaslik">NEDEN BİZ?</h1>
            <p>
              Yazılım Geliştirme Topluluğu, gerek yazılım alanında kendinizi
              geliştirebileceğiniz gerekse sosyal anlamda güzel arkadaşlıklar
              kurabileceğiniz bir ortam sunar. Birlikte yapacağımız projeler ile
              CV'nize ekleyebileceğiniz birçok tecrübe kazanabilirsiniz. Bu
              projeler ve çalışmalar ile daha aktif ve verimli üniversite
              yılları geçirebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hakkımızda;

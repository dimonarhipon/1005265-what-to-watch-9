import Promo from '../../components/promo/promo';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';

function Main() {
  return (
    <>
      <Promo />

      <div className="page-content">
        <Catalog />

        <Footer />
      </div>
    </>
  );
}

export default Main;

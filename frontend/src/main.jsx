import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "../src/pages/Homepage";
import Meniu from "../src/pages/Meniu";
import Products from "../src/pages/Products";
import CoffeeCategory from "../src/pages/CoffeeCategory";
import OriginCoffee from "./pages/OriginCoffee";
import BraziliaAltaMogianaFranca from "./components/OriginCoffee/BraziliaAltaMogianaFranca";
import ColumbiaSupremo from "./components/OriginCoffee/ColumbiaSupremo";
import CostaRica from "./components/OriginCoffee/CostaRica";
import ElSalvador from "./components/OriginCoffee/ElSalvador";
import EthiopiaYirgacheffe from "./components/OriginCoffee/EthiopiaYirgacheffe";
import Guatemala from "./components/OriginCoffee/Guatemala";
import Honduras from "./components/OriginCoffee/Honduras";
import IndiaPlantation from "./components/OriginCoffee/IndiaPlantation";
import IndiaMalabar from "./components/OriginCoffee/IndiaMalabar";
import Kenya from "./components/OriginCoffee/Kenya";
import Kilimanjaro from "./components/OriginCoffee/Kilimanjaro";
import Mexic from "./components/OriginCoffee/Mexic";
import NicaraguaMaragogype from "./components/OriginCoffee/NicaraguaMaragogype";
import NicaraguaMatagalpa from "./components/OriginCoffee/NicaraguaMatagalpa";
import PeruCajamarca from "./components/OriginCoffee/PeruCajamarca";
import SanDomingo from "./components/OriginCoffee/SanDomingo";

import BlendCoffee from "./pages/BlendCoffee";
import Avedis from "./components/BlendCoffee/Avedis";
import CafeaCiocolata from "./components/BlendCoffee/CafeaCiocolata";
import CafeaIrish from "./components/BlendCoffee/CafeaIrish";
import CafeaAromaIubire from "./components/BlendCoffee/CafeaAromaIubire";
import CafeaAromavanilie from "./components/BlendCoffee/CafeaAromavanilie";
import CafeaScortisoara from "./components/BlendCoffee/CafeaScortisoara";
import CafeauaBunicii from "./components/BlendCoffee/CafeauaBunicii";
import DegustoSupremo from "./components/BlendCoffee/DegustoSupremo";
import MiscelaArabica from "./components/BlendCoffee/MiscelaArabica";
import MiscelaCaraibica from "./components/BlendCoffee/MiscelaCaraibica";
import MiscelaCeaMaiBunaCafea from "./components/BlendCoffee/MiscelaCeaMaiBunaCafea";
import MiscelaDecofeinizata from "./components/BlendCoffee/MiscelaDecofeinizata";
import MiscelaItaliana from "./components/BlendCoffee/MiscelaItaliana";

import TeaCategory from "../src/pages/TeaCategory";
import CeaiuriTub from "./pages/CeaiuriTub";
import NightsTub from "./components/TeaProducts/Ceaiuri_Tub/NightsTub";
import ChampagneSplashesTub from "./components/TeaProducts/Ceaiuri_Tub/ChampagneSplashesTub";
import AlpineHerbsTub from "./components/TeaProducts/Ceaiuri_Tub/AlpineHerbsTub";
import BahamianSoursopTub from "./components/TeaProducts/Ceaiuri_Tub/BahamianSoursopTub";
import BerryJamTub from "./components/TeaProducts/Ceaiuri_Tub/BerryJamTub";
import CleopatraNightTub from "./components/TeaProducts/Ceaiuri_Tub/CleopatraNightTub";
import LoveBlossomTub from "./components/TeaProducts/Ceaiuri_Tub/LoveBlossomTub";
import PassionFruitTub from "./components/TeaProducts/Ceaiuri_Tub/PassionFruitTub";
import RoyalDessertTub from "./components/TeaProducts/Ceaiuri_Tub/RoyalDessertTub";
import StrawberryMarshmallowTub from "./components/TeaProducts/Ceaiuri_Tub/StrawberryMarshmallowTub";
import WildBerryTub from "./components/TeaProducts/Ceaiuri_Tub/WildBerryTub";

import CeaiuriPlic from "./pages/CeaiuriPlic";
import NightsPlic from "./components/TeaProducts/CeaiuriPlic/NightsPlic";
import ChampagneSplashesPlic from "./components/TeaProducts/CeaiuriPlic/ChampagneSplashesPlic";
import CitrusMelissaPlic from "./components/TeaProducts/CeaiuriPlic/CitrusMelissaPlic";
import BahamianSoursopPlic from "./components/TeaProducts/CeaiuriPlic/BahamianSoursopPlic";
import BerryJamPlic from "./components/TeaProducts/CeaiuriPlic/BerryJamPlic";
import LoveBlossomPlic from "./components/TeaProducts/CeaiuriPlic/LoveBlossomPlic";
import PassionFruitPlic from "./components/TeaProducts/CeaiuriPlic/PassionFruitPlic";
import RoyalDessertPlic from "./components/TeaProducts/CeaiuriPlic/RoyalDessertPlic";
import StrawberryMarshmallowPlic from "./components/TeaProducts/CeaiuriPlic/StrawberryMarshmallowPlic";
import WildBerryPlic from "./components/TeaProducts/CeaiuriPlic/WildBerryPlic";
import NightBeauteaPlic from "./components/TeaProducts/CeaiuriPlic/NightBeauteaPlic";
import RaspberryVanillaPlic from "./components/TeaProducts/CeaiuriPlic/RaspberryVanillaPlic";

import CeaiuriPiramida from "./pages/CeaiuriPiramida";
import NightsPiramida from "./components/TeaProducts/CeaiuriPiramida/NightsPiramida";
import AlpineHerbsPiramida from "./components/TeaProducts/CeaiuriPiramida/AlpineHerbsPiramida";
import ChampagneSplashesPiramida from "./components/TeaProducts/CeaiuriPiramida/ChampagneSplashesPiramida";
import CleopatraNightPiramida from "./components/TeaProducts/CeaiuriPiramida/CleopatraNightPiramida";
import BahamianSoursopPiramida from "./components/TeaProducts/CeaiuriPiramida/BahamianSoursopPiramida";
import BerryJamPiramida from "./components/TeaProducts/CeaiuriPiramida/BerryJamPiramida";
import CherryConfiturePiramida from "./components/TeaProducts/CeaiuriPiramida/CherryConfiturePiramida";
import CremeBrullePiramida from "./components/TeaProducts/CeaiuriPiramida/CremeBrullePiramida";
import PassionFruitPiramida from "./components/TeaProducts/CeaiuriPiramida/PassionFruitPiramida";
import StrawberryMarshmallowPiramida from "./components/TeaProducts/CeaiuriPiramida/StrawberryMarshmallowPiramida";
import GoldenMangoPiramida from "./components/TeaProducts/CeaiuriPiramida/GoldenMangoPiramida";
import BergamotVanillaPiramida from "./components/TeaProducts/CeaiuriPiramida/BergamotVanillaPiramida";
import MilkOolongPiramida from "./components/TeaProducts/CeaiuriPiramida/MilkOolongPiramida";
import PomegranateShakePiramida from "./components/TeaProducts/CeaiuriPiramida/PomegranateShakePiramida";
import WhitePeachPiramida from "./components/TeaProducts/CeaiuriPiramida/WhitePeachPiramida";

import CeaiuriAsortate from "./pages/CeaiuriAsortate";
import GreenTea from "./components/TeaProducts/Ceaiuri_Asortate/GreenTea";
import Bergamot from "./components/TeaProducts/Ceaiuri_Asortate/Bergamot";
import FlowerTeaAssorted from "./components/TeaProducts/Ceaiuri_Asortate/FlowerTeaAssorted";
import FestTeaSet from "./components/TeaProducts/Ceaiuri_Asortate/FestTeaSet";
import PrimeTeaSet from "./components/TeaProducts/Ceaiuri_Asortate/PrimeTeaSet";

import CeaiuriSeturiCadou from "./pages/CeaiuriSeturiCadou";
import Bouquet from "./components/TeaProducts/Seturi_Cadou/Bouquet";

import BucuriaProducts from "./pages/BucuriaProducts";
import AccesoriesProducts from "./pages/AccesoriesProducts";
import Ibric300 from "./components/AccesoriesProducts/Ibric300";
import Ibric400 from "./components/AccesoriesProducts/Ibric400";
import Ibric500 from "./components/AccesoriesProducts/Ibric500";
import Ibric600 from "./components/AccesoriesProducts/Ibric600";
import Ibric700 from "./components/AccesoriesProducts/Ibric700";
import Ibric1000 from "./components/AccesoriesProducts/Ibric1000";
import CanaCupru from "./components/AccesoriesProducts/CanaCupru";
import PaharCupru from "./components/AccesoriesProducts/PaharCupru";
import CeainicVerde from "./components/AccesoriesProducts/CeainicVerde";

import Articole from "./pages/Articole";
import Contact from "../src/pages/Contact";
import Locations from "../src/pages/Locations";
import Marvimex from "./components/Locations/Marvimex";
import CasaDeCultura from "./components/Locations/CasaDeCultura";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MachinetaMoo from "./components/AccesoriesProducts/MachinetaMoo";
import MachinetaRosie from "./components/AccesoriesProducts/MachinetaRosie";
import RasnitaMare from "./components/AccesoriesProducts/RasnitaMare";
import RasnitaMica from "./components/AccesoriesProducts/RasnitaMica";
import RasnitaMareMDeschid from "./components/AccesoriesProducts/RasnitaMareMDeschid";
import RasnitaMicaMDeschid from "./components/AccesoriesProducts/RasnitaMicaMDeschid";
import BucuriaBomboane from "./pages/BucuriaBomboane";
import BucuriaBiscuiti from "./pages/BucuriaBiscuiti";
import BucuriaFaraZahar from "./pages/BucuriaFaraZahar";
import Meteorit_SANA from "./components/BucuriaProducts/Fara_Zahar/Meteorit_SANA";
import Tarancuta from "./components/BucuriaProducts/Biscuiti/Tarancuta";
import LapteTopit from "./components/BucuriaProducts/Biscuiti/LapteTopit";
import MilkWow from "./components/BucuriaProducts/Biscuiti/MilkWow";
import ChisinauDeSeara from "./components/BucuriaProducts/Bomboane/ChisinauDeSeara";
import Meteorit from "./components/BucuriaProducts/Bomboane/Meteorit";
import Bucuria from "./components/BucuriaProducts/Bomboane/Bucuria";
import LaptePasare from "./components/BucuriaProducts/Bomboane/LaptePasare";
import LaptePasareBanane from "./components/BucuriaProducts/Bomboane/LaptePasareBanane";
import LaptePasareCapsiuni from "./components/BucuriaProducts/Bomboane/LaptePasareCapsiuni";
import Griliaj from "./components/BucuriaProducts/Bomboane/Griliaj";
import LaptePasareCocos from "./components/BucuriaProducts/Bomboane/LaptePasareCocos";
import LaptePasareCiocolata from "./components/BucuriaProducts/Bomboane/LaptePasareCiocolata";
import LaptePasareLamaie from "./components/BucuriaProducts/Bomboane/LaptePasareLamaie";
import StruguriCiocolata from "./components/BucuriaProducts/Bomboane/StruguriCiocolata";
import VisinaCiocolata from "./components/BucuriaProducts/Bomboane/VisinaCiocolata";
import InspiratieCaisa from "./components/BucuriaProducts/Bomboane/InspiratieCaisa";
import InspiratieLamaie from "./components/BucuriaProducts/Bomboane/InspiratieLamaie";
import InspiratiePortocala from "./components/BucuriaProducts/Bomboane/InspiratiePortocala";
import InspiratieVisine from "./components/BucuriaProducts/Bomboane/InspiratieVisine";
import Duet from "./components/BucuriaProducts/Bomboane/Duet";
import Favorit from "./components/BucuriaProducts/Bomboane/Favorit";
import Brandusa from "./components/BucuriaProducts/Bomboane/Brandusa";
import Clepsidra from "./components/BucuriaProducts/Bomboane/Clepsidra";
import Dulcineea from "./components/BucuriaProducts/Bomboane/Dulcineea";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/meniu" element={<Meniu />} />
        <Route path="/produse" element={<Products />} />
        <Route path="/produse/cafea" element={<CoffeeCategory />} />
        <Route path="/produse/cafea/origini" element={<OriginCoffee />} />
        <Route
          path="/produse/cafea/origini/brazilia_alta_mogiana_franca"
          element={<BraziliaAltaMogianaFranca />}
        />
        <Route
          path="/produse/cafea/origini/columbia_supremo"
          element={<ColumbiaSupremo />}
        />
        <Route
          path="/produse/cafea/origini/costa_rica_san_rafael_tarrazu"
          element={<CostaRica />}
        />
        <Route
          path="/produse/cafea/origini/el_savador_himalaya"
          element={<ElSalvador />}
        />
        <Route
          path="/produse/cafea/origini/ethiopia_yirgacheffe"
          element={<EthiopiaYirgacheffe />}
        />
        <Route
          path="/produse/cafea/origini/guatemala"
          element={<Guatemala />}
        />
        <Route
          path="/produse/cafea/origini/india_aa_plantation"
          element={<IndiaPlantation />}
        />
        <Route
          path="/produse/cafea/origini/india_malabar"
          element={<IndiaMalabar />}
        />
        <Route
          path="/produse/cafea/origini/kilimanjaro_moshi"
          element={<Kilimanjaro />}
        />
        <Route
          path="/produse/cafea/origini/mexic_finca_monte_azul"
          element={<Mexic />}
        />
        <Route
          path="/produse/cafea/origini/nicaragua_maragogype"
          element={<NicaraguaMaragogype />}
        />
        <Route
          path="/produse/cafea/origini/nicaragua_matagalpa"
          element={<NicaraguaMatagalpa />}
        />
        <Route
          path="/produse/cafea/origini/peru_cajamarca"
          element={<PeruCajamarca />}
        />
        <Route
          path="/produse/cafea/origini/san_somingo_barahona"
          element={<SanDomingo />}
        />
        <Route path="/produse/cafea/origini/kenya_aa_tq" element={<Kenya />} />
        <Route path="/produse/cafea/origini/honduras" element={<Honduras />} />

        <Route path="/produse/cafea/blend" element={<BlendCoffee />} />
        <Route path="/produse/cafea/blend/cafea_avedis" element={<Avedis />} />
        <Route
          path="/produse/cafea/blend/cafea_cu_aroma_de_ciocolata"
          element={<CafeaCiocolata />}
        />
        <Route
          path="/produse/cafea/blend/cafea_cu_aroma_de_irish_coffee"
          element={<CafeaIrish />}
        />
        <Route
          path="/produse/cafea/blend/cafea_cu_aroma_de_iubire"
          element={<CafeaAromaIubire />}
        />
        <Route
          path="/produse/cafea/blend/cafea_cu_aroma_de_vanilie"
          element={<CafeaAromavanilie />}
        />
        <Route
          path="/produse/cafea/blend/cafea_cu_scortisoara"
          element={<CafeaScortisoara />}
        />
        <Route
          path="/produse/cafea/blend/cafeaua_bunicii_100_arabica"
          element={<CafeauaBunicii />}
        />
        <Route
          path="/produse/cafea/blend/degusto_suprema"
          element={<DegustoSupremo />}
        />
        <Route
          path="/produse/cafea/blend/miscela_arabica"
          element={<MiscelaArabica />}
        />
        <Route
          path="/produse/cafea/blend/miscela_caraibica"
          element={<MiscelaCaraibica />}
        />
        <Route
          path="/produse/cafea/blend/miscela_cea_mai_buna_cafea"
          element={<MiscelaCeaMaiBunaCafea />}
        />
        <Route
          path="/produse/cafea/blend/miscela_decofeinizata"
          element={<MiscelaDecofeinizata />}
        />
        <Route
          path="/produse/cafea/blend/miscela_italiana"
          element={<MiscelaItaliana />}
        />

        <Route path="/produse/ceaiuri" element={<TeaCategory />} />
        <Route path="/produse/ceaiuri/tub" element={<CeaiuriTub />} />
        <Route
          path="/produse/ceaiuri/tub/1001_nights"
          element={<NightsTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/champagne_splashes"
          element={<ChampagneSplashesTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/alpine_herbs"
          element={<AlpineHerbsTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/bahamian_soursop"
          element={<BahamianSoursopTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/berry_jam"
          element={<BerryJamTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/cleopatra_s_night"
          element={<CleopatraNightTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/love_blossom"
          element={<LoveBlossomTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/passion_fruit"
          element={<PassionFruitTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/royal_dessert"
          element={<RoyalDessertTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/strawberry_marshmallow"
          element={<StrawberryMarshmallowTub />}
        />
        <Route
          path="/produse/ceaiuri/tub/wild_berry"
          element={<WildBerryTub />}
        />

        <Route path="/produse/ceaiuri/plic" element={<CeaiuriPlic />} />
        <Route
          path="/produse/ceaiuri/plic/1001_nights"
          element={<NightsPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/champagne_splashes"
          element={<ChampagneSplashesPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/citrus_melissa"
          element={<CitrusMelissaPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/bahamian_soursop"
          element={<BahamianSoursopPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/berry_jam"
          element={<BerryJamPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/love_blossom"
          element={<LoveBlossomPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/passion_fruit"
          element={<PassionFruitPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/royal_dessert"
          element={<RoyalDessertPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/strawberry_marshmellow"
          element={<StrawberryMarshmallowPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/wild_berry"
          element={<WildBerryPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/night_beautea"
          element={<NightBeauteaPlic />}
        />
        <Route
          path="/produse/ceaiuri/plic/raspberrry_vanilla"
          element={<RaspberryVanillaPlic />}
        />

        <Route path="/produse/ceaiuri/piramida" element={<CeaiuriPiramida />} />
        <Route
          path="/produse/ceaiuri/piramida/1001_nights"
          element={<NightsPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/alpine_herbs"
          element={<AlpineHerbsPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/champagne_splashes"
          element={<ChampagneSplashesPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/cleopatra_s_night"
          element={<CleopatraNightPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/bahamian_soursop"
          element={<BahamianSoursopPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/berry_jam"
          element={<BerryJamPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/cherry_confiture"
          element={<CherryConfiturePiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/creme_brulle"
          element={<CremeBrullePiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/passion_fruit"
          element={<PassionFruitPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/strawberry_marshmallow"
          element={<StrawberryMarshmallowPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/golden_mango"
          element={<GoldenMangoPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/bargamot_vanilla"
          element={<BergamotVanillaPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/milk_oolong"
          element={<MilkOolongPiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/pomegranate_shake"
          element={<PomegranateShakePiramida />}
        />
        <Route
          path="/produse/ceaiuri/piramida/white_peach"
          element={<WhitePeachPiramida />}
        />

        <Route path="/produse/ceaiuri/asortate" element={<CeaiuriAsortate />} />
        <Route
          path="/produse/ceaiuri/asortate/green_tea"
          element={<GreenTea />}
        />
        <Route
          path="/produse/ceaiuri/asortate/bergamot"
          element={<Bergamot />}
        />
        <Route
          path="/produse/ceaiuri/asortate/flower_tea"
          element={<FlowerTeaAssorted />}
        />
        <Route
          path="/produse/ceaiuri/asortate/fest_tea"
          element={<FestTeaSet />}
        />
        <Route
          path="/produse/ceaiuri/asortate/prime_tea"
          element={<PrimeTeaSet />}
        />

        <Route
          path="/produse/ceaiuri/seturi_cadou"
          element={<CeaiuriSeturiCadou />}
        />
        <Route
          path="/produse/ceaiuri/seturi_cadou/bouquet"
          element={<Bouquet />}
        />

        <Route path="/produse/bucuria" element={<BucuriaProducts />} />
        <Route path="/produse/bucuria/bomboane" element={<BucuriaBomboane />} />
        <Route
          path="/produse/bucuria/bomboane/chisinau_de_seara"
          element={<ChisinauDeSeara />}
        />
        <Route
          path="/produse/bucuria/bomboane/meteorit"
          element={<Meteorit />}
        />
        <Route path="/produse/bucuria/bomboane/bucuria" element={<Bucuria />} />
        <Route path="/produse/bucuria/bomboane/griliaj" element={<Griliaj />} />
        <Route
          path="/produse/bucuria/bomboane/lapte_de_pasare"
          element={<LaptePasare />}
        />
        <Route
          path="/produse/bucuria/bomboane/lapte_de_pasare_banane"
          element={<LaptePasareBanane />}
        />
        <Route
          path="/produse/bucuria/bomboane/lapte_de_pasare_capsiuni"
          element={<LaptePasareCapsiuni />}
        />
        <Route
          path="/produse/bucuria/bomboane/lapte_de_pasare_cocos"
          element={<LaptePasareCocos />}
        />
        <Route
          path="/produse/bucuria/bomboane/lapte_de_pasare_ciocolata"
          element={<LaptePasareCiocolata />}
        />
        <Route
          path="/produse/bucuria/bomboane/lapte_de_pasare_lamaie"
          element={<LaptePasareLamaie />}
        />
        <Route
          path="/produse/bucuria/bomboane/struguri_in_ciocolata"
          element={<StruguriCiocolata />}
        />
        <Route
          path="/produse/bucuria/bomboane/visina_in_ciocolata"
          element={<VisinaCiocolata />}
        />
        <Route
          path="/produse/bucuria/bomboane/inspiratie_caisa"
          element={<InspiratieCaisa />}
        />
        <Route
          path="/produse/bucuria/bomboane/inspiratie_lamaie"
          element={<InspiratieLamaie />}
        />
        <Route
          path="/produse/bucuria/bomboane/inspiratie_portocala"
          element={<InspiratiePortocala />}
        />
        <Route
          path="/produse/bucuria/bomboane/inspiratie_visine"
          element={<InspiratieVisine />}
        />
        <Route path="/produse/bucuria/bomboane/duet" element={<Duet />} />
        <Route path="/produse/bucuria/bomboane/favorit" element={<Favorit />} />
        <Route
          path="/produse/bucuria/bomboane/brandusa"
          element={<Brandusa />}
        />
        <Route
          path="/produse/bucuria/bomboane/clepsidra"
          element={<Clepsidra />}
        />
        <Route
          path="/produse/bucuria/bomboane/dulcineea"
          element={<Dulcineea />}
        />

        <Route path="/produse/bucuria/biscuiti" element={<BucuriaBiscuiti />} />
        <Route
          path="/produse/bucuria/biscuiti/tarancuta"
          element={<Tarancuta />}
        />
        <Route
          path="/produse/bucuria/biscuiti/lapte_topit"
          element={<LapteTopit />}
        />
        <Route
          path="/produse/bucuria/biscuiti/milk_wow"
          element={<MilkWow />}
        />

        <Route
          path="/produse/bucuria/fara_zahar"
          element={<BucuriaFaraZahar />}
        />
        <Route
          path="/produse/bucuria/fara_zahar/meteorit_sana"
          element={<Meteorit_SANA />}
        />

        <Route path="/produse/accesorii" element={<AccesoriesProducts />} />
        <Route path="/produse/accesorii/ibric_300ml" element={<Ibric300 />} />
        <Route path="/produse/accesorii/ibric_400ml" element={<Ibric400 />} />
        <Route path="/produse/accesorii/ibric_500ml" element={<Ibric500 />} />
        <Route path="/produse/accesorii/ibric_600ml" element={<Ibric600 />} />
        <Route path="/produse/accesorii/ibric_700ml" element={<Ibric700 />} />
        <Route path="/produse/accesorii/ibric_1L" element={<Ibric1000 />} />
        <Route path="/produse/accesorii/cana_cupru" element={<CanaCupru />} />
        <Route path="/produse/accesorii/pahar_cupru" element={<PaharCupru />} />
        <Route
          path="/produse/accesorii/rasnita_mare"
          element={<RasnitaMare />}
        />
        <Route
          path="/produse/accesorii/rasnita_mica"
          element={<RasnitaMica />}
        />
        <Route
          path="/produse/accesorii/rasnita_mare_maro_deschis"
          element={<RasnitaMareMDeschid />}
        />
        <Route
          path="/produse/accesorii/rasnita_mica_maro_deschis"
          element={<RasnitaMicaMDeschid />}
        />
        <Route
          path="/produse/accesorii/ceainic_verde"
          element={<CeainicVerde />}
        />
        <Route
          path="/produse/accesorii/machineta_moo"
          element={<MachinetaMoo />}
        />
        <Route
          path="/produse/accesorii/machineta_rosie"
          element={<MachinetaRosie />}
        />

        <Route path="/articole" element={<Articole />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locatii" element={<Locations />} />
        <Route path="/locatii/marvimex" element={<Marvimex />} />
        <Route path="/locatii/casa-de-cultura" element={<CasaDeCultura />} />
      </Routes>
    </Router>
  </StrictMode>
);

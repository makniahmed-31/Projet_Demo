import React from "react";
import bien from "../img/bien.jpg";
import detox from "../img/detox.jpg";

const Infos = () => {
  return (
    <div className="infos">
      <figure>
        <img src={bien} alt="" />
        <h2>Les bienfaits des jus de fruit</h2>
        <figcaption>
          {" "}
          <p>
            Les jus de fruit ont des propriétés anti-oxydantes qui sont un atout
            important pour une meilleure santé. Cependant, la pasteurisation et
            la durée de conversation vont considérablement impacter la teneur en
            vitamines des jus de fruits. Cela plaide pour les jus de fruit frais
            faits à la maison et consommés tout de suite.
          </p>
          <p>
            Contrairement à une croyance répandue, un jus de fruits n’a pas
            exactement les même propriété en termes de santé qu’un fruit. En
            effet, on ne consomme pas fibre lorsque l’on boit un jus de fruit.
            Par conséquent, la teneur en sucre d’un jus est normalement
            supérieure aux fruits. Il faut donc éviter la sur-consommation de
            jus de fruits. De plus, la notion de “detox” est quelque peu
            surexploitée et galvaudée par les producteurs de jus de fruit
            industriels. Toutefois, les les bienfaits des jus de fruit offrent
            une base intéressante pour un régime alimentaire et participe
            parfaitement à la consommation des légendaires cinq fruits et
            légumes par jour vantés ici et là.
          </p>
          <p>
            Un jus de fruit frais offre les meilleures caractéristiques par
            rapport aux jus de fruits industriels souvent pauvres en vitamines
            et coupés avec de l’eau. Nous recommandons de vous équiper d’un
            extracteur de jus de qualité afin de faire d’excellents jus de fruit
            quotidiens. Vous pourrez faire vous-même vos jus avec très peu
            d’efforts tout en économisant de l’argent en achetant directement
            une malle d’oranges au marché ou au supermarché du coin. Si vous
            n’avez aucune idée de quoi acheter, vous trouverez une liste de
            presse-agrumes de marque en cliquant ici.
          </p>
          <p>
            La technologie a bien évolué au cours des dernières années et on
            trouve des presse-agrume de très grande qualité qui surpasse
            complètement la bonne vieille presse à jus d’orange de nos enfances.
            Le jus d’orange matinal devient un vrai jeu d’enfant grâce au
            système de pressage électrique qui permet de filtrer tous le jus des
            agrumes à la vitesse grand V. Les centrifugeuses sont recommandées
            si vous souhaitez faire de grandes quantités de jus. De plus, ces
            machines pratiques et ingénieuses permettent un nettoyage facile.
          </p>
        </figcaption>
      </figure>
      <figure>
        <img src={detox} alt="" />
        <h2>Cure detox : bienfaits, conseils et recettes</h2>
        <figcaption>
          <p>
            Si vous lisez cet article, c’est probablement car vous souhaitez
            faire une cure detox mais ne savez pas vraiment par où commencer et
            vous vous posez plein de questions. Vous avez entendu dire qu’elle
            peut vous permettre de mincir, de gagner en vitalité, d’avoir une
            plus belle peau, de vous sentir mieux dans votre corps, d’être en
            meilleur santé,… Mais malgré tout ce que vous avez pu lire, vous
            restez sceptique. Et c’est tout à fait normal.
          </p>
          <p>
            Si vous lisez cet article, c’est probablement car vous souhaitez
            faire une cure detox mais ne savez pas vraiment par où commencer et
            vous vous posez plein de questions. Vous avez entendu dire qu’elle
            peut vous permettre de mincir, de gagner en vitalité, d’avoir une
            plus belle peau, de vous sentir mieux dans votre corps, d’être en
            meilleur santé,… Mais malgré tout ce que vous avez pu lire, vous
            restez sceptique. Et c’est tout à fait normal.
          </p>
          <p>
            Et il le fait déjà très bien tout seul. En effet, l’organisme est
            composé de plusieurs mécanismes qui permettent d’éliminer les
            toxines et les déchets. Cela se fait principalement via le système
            lymphatique et les organes émonctoires (le foie, les poumons, les
            reins, l’intestin et la peau).
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Infos;

import React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/heading/Heading';

import Accordion from '../../UI/accordion/Accordion';

import styles from './index.module.scss';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - VAC</title>
      </Helmet>
      <Heading title={'Privacy Policy'} />
      <div className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <Accordion title={'Terms'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam vel. Illo sapiente architecto quas
              expedita dolores voluptatum magni veniam similique, impedit ex quod aspernatur, sunt laborum, excepturi
              placeat omnis.
            </Accordion>
            <Accordion title={'Authorization'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt quos adipisci molestiae,
              explicabo vel cum quibusdam quia dolor earum perferendis exercitationem fuga eum. Tenetur recusandae
              ratione ut sapiente provident eligendi harum, sunt maiores rerum quibusdam, consequatur, similique iste
              temporibus commodi obcaecati blanditiis natus aspernatur! Excepturi ipsa accusantium corrupti error
              dolorum vitae consectetur ad veniam animi? Qui, eligendi a. Optio dicta pariatur, in exercitationem totam
              placeat dignissimos sequi eum magnam omnis, vitae veniam molestias dolor? Autem deserunt ipsa reiciendis
              nam odio molestiae unde blanditiis sequi minus esse provident, reprehenderit, beatae id, culpa
              accusantium? Consequuntur, architecto voluptate! Deserunt qui minima accusantium obcaecati quos amet earum
              sed voluptas delectus. Earum molestiae expedita praesentium magni consequatur illo doloremque aspernatur
              repellat, assumenda nobis, repudiandae, facilis impedit. Tempora fugit neque eveniet totam nostrum quas
              inventore, tenetur sit recusandae impedit dolorum explicabo distinctio harum, sequi aliquid dicta rerum
              facilis? Quibusdam ea nesciunt repellat suscipit nostrum quia minus dolore, impedit blanditiis odit omnis
              ex aliquid odio nisi praesentium architecto quod adipisci alias dolores facere porro quas, fugiat labore
              aut. Mollitia facilis delectus corporis quae qui esse, pariatur velit at non voluptates ea? Dolore soluta
              accusamus aperiam ad velit ipsum harum modi quas error commodi fugiat et dicta eos placeat cupiditate
              itaque nobis, quaerat nostrum eius. Porro quos id cum molestias rerum ipsa! Magnam alias, fugiat
              voluptatum laborum officia quod officiis commodi, illum quae tempore adipisci, rerum suscipit dignissimos
              sit veniam facere id nulla voluptas excepturi magni sapiente temporibus voluptates ipsam et. Ipsa soluta
              provident nam unde ducimus minus vel perspiciatis ratione facilis non voluptate, error animi tenetur
              voluptatum quod? Animi in mollitia autem deserunt maxime sit nulla ut eligendi! Aperiam beatae aspernatur
              harum consequuntur numquam maxime eligendi dolorem facere, dolor cum porro culpa fugiat quo fugit hic
              cumque iusto eos ex corporis quos. Assumenda, est minus vitae unde necessitatibus repudiandae sit cumque
              alias delectus cum eligendi ut in et iste accusantium eius minima expedita, labore impedit odio laborum
              aut id vel. Mollitia, itaque optio! Doloribus molestiae ullam distinctio modi laudantium eveniet vero
              provident, debitis quo quod adipisci assumenda voluptatum blanditiis odio asperiores placeat est nam,
              voluptates ducimus. Dolore perferendis consectetur, architecto animi inventore nulla exercitationem quos
              amet ab, ea omnis. Aperiam, ad esse facilis eligendi voluptatum cum ipsum incidunt voluptates praesentium
              asperiores quo nihil ullam a perspiciatis quas consequatur repudiandae. Ea, rerum aspernatur optio
              inventore ex sapiente quibusdam saepe accusamus veniam illo deserunt iure similique delectus eligendi sed
              qui, tempore dignissimos perferendis dicta soluta placeat veritatis unde adipisci! Ratione numquam maiores
              ducimus, distinctio ipsum repellendus eius voluptatem sequi cum doloremque eum, tenetur praesentium
              deserunt blanditiis recusandae similique culpa totam placeat maxime dolores vero magni ut sit! Iste, iure!
              Ea esse accusamus a cum laudantium doloremque commodi rerum? Quo odio vel quasi similique blanditiis
              cupiditate alias maxime reiciendis eligendi illo, pariatur id molestiae dolor nulla ducimus iure
              exercitationem perspiciatis sint deserunt modi explicabo cum provident maiores! Ullam, voluptas illum amet
              impedit labore adipisci repellat eum fugit optio et inventore quae quasi quos dolor explicabo excepturi
              repudiandae! Distinctio, unde.
            </Accordion>
            <Accordion title={'Links'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam vel. Illo sapiente architecto quas
              expedita dolores voluptatum magni veniam similique, impedit ex quod aspernatur, sunt laborum, excepturi
              placeat omnis.
            </Accordion>
            <Accordion title={'Site terms of use modifications'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam vel. Illo sapiente architecto quas
              expedita dolores voluptatum magni veniam similique, impedit ex quod aspernatur, sunt laborum, excepturi
              placeat omnis.
            </Accordion>
            <Accordion title={'Governing law'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam vel. Illo sapiente architecto quas
              expedita dolores voluptatum magni veniam similique, impedit ex quod aspernatur, sunt laborum, excepturi
              placeat omnis.
            </Accordion>
            <Accordion title={'How we treat your personal information'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam vel. Illo sapiente architecto quas
              expedita dolores voluptatum magni veniam similique, impedit ex quod aspernatur, sunt laborum, excepturi
              placeat omnis.
            </Accordion>
            <Accordion title={'Cookies'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam vel. Illo sapiente architecto quas
              expedita dolores voluptatum magni veniam similique, impedit ex quod aspernatur, sunt laborum, excepturi
              placeat omnis.
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;

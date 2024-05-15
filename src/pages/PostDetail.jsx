import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import  Thumbnail from '../photos/blog22.jpg'
const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div> 
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
            <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam ducimus et nisi expedita illum, eius id ut quis sequi numquam ad molestiae explicabo? Vero, harum. Consequuntur, modi iste illum et ea, tenetur quod recusandae rem quasi voluptates quaerat praesentium!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab officiis illum cupiditate placeat sapiente veritatis eaque, commodi ex adipisci nihil ipsum hic saepe animi ducimus quis beatae distinctio! Qui, dolorem suscipit? Necessitatibus odio sunt fugiat nostrum minima ratione. Corporis, maiores delectus reiciendis culpa molestiae quidem distinctio minima fugit porro repudiandae voluptatum eos deserunt veniam id.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatum quisquam ea facilis a porro enim odio hic sint, iure laborum illum corrupti aliquid. Odio dolor repudiandae quo optio similique eius dolorem voluptatum iure reiciendis sunt veritatis non quas fugit expedita nemo mollitia consequuntur provident autem vel, voluptatibus facere voluptas! Quidem impedit enim ullam harum, earum esse tenetur magni magnam, non alias modi tempora exercitationem, recusandae ut cupiditate totam mollitia blanditiis molestiae ea! Repellat tenetur amet suscipit labore eveniet dolor, veritatis accusantium mollitia minima eius. Eos dicta sed totam veniam ipsa veritatis cumque dolorem atque ad, obcaecati impedit sapiente tempora perspiciatis corporis vero, assumenda porro culpa similique incidunt reprehenderit corrupti debitis.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatum praesentium laudantium odio temporibus aspernatur consequatur possimus expedita dolor voluptates.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatem ipsum deserunt fugiat consequatur doloribus rerum repellendus consectetur culpa beatae quos repellat accusantium harum laudantium, quasi voluptatibus quas adipisci sed quis numquam odit veritatis fugit? Aperiam beatae natus nulla aliquam odit laboriosam, nam quibusdam, quos alias, sit eos ullam aliquid culpa sequi quas unde porro animi mollitia ut molestias voluptates! Laboriosam accusantium obcaecati totam mollitia dolorem adipisci consectetur ratione possimus, explicabo accusamus modi repellat iusto! Dolorem sit saepe odio voluptate voluptatum! Reiciendis aliquam nulla minima sunt quas, mollitia et non esse culpa maxime sint blanditiis vitae asperiores incidunt ullam. Consectetur hic dolorum dignissimos in dolores porro atque architecto ea, incidunt nemo aut ipsa nobis beatae asperiores, ad unde qui dolore. Explicabo, sunt ipsum. Nihil magni quae tenetur quidem repellendus! Atque consectetur hic rerum odit exercitationem numquam laboriosam, harum ipsum. Eaque ducimus repellendus veritatis reprehenderit nemo quo libero iure magni culpa vero molestias, ipsum itaque, amet fugiat accusantium debitis ut corrupti a quidem dolore adipisci? Est, eos repellat, eum quibusdam nostrum commodi porro repudiandae sit, quis minima ad alias maiores perspiciatis quia nulla delectus. Saepe fuga dolor quidem consequuntur obcaecati rem, dolorum magnam soluta quae animi aperiam voluptas ea enim beatae!</p>
      </div>
    </section>
  );
};

export default PostDetail;

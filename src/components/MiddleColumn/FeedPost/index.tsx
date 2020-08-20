import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=M9UqsXMq5GNcHLbShtSJklzQalDbvTyBD7s43T_HDvc" alt="Gates" />
          <Column>
            <h3>Bill Gates</h3>
            <h4>Co-chair, Bill & Melinda Gates Foundation</h4>
            <time>1 week</time>
          </Column>
        </Row>

        <PostImage
          src="https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/Year-in-Review-2018/EOY_2018_TGN_Article_Hero_v2.ashx"
          alt="Rocketseat Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;

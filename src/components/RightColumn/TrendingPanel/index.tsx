import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Today’s most viewed courses</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">The Six Morning Habits of High Performers</span>
              <span className="subtext">Pete Mockaitis | How to Be Awesome at Your Job</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Rocketseat</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Strategic Thinking</span>
              <span className="subtext">Dorie Clark</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Bootcamp da Rocketseat</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">The Six Morning Habits of High Performers</span>
              <span className="subtext">Pete Mockaitis | How to Be Awesome at Your Job</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Strategic Thinking</span>
              <span className="subtext">Dorie Clark</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;

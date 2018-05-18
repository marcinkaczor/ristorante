import React from 'react';
import { Row } from 'reactstrap';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
  { id: '0', label: 'Cheddar', type: 'cheddar', path: '../../assets/cheddar.jpg' },
  { id: '1', label: 'Olive', type: 'olive', path: '../../assets/olive.jpg' },
  { id: '2', label: 'Parmezan', type: 'parmezan', path: '../../assets/parmezan.jpg' },
  { id: '3', label: 'Pomodoro', type: 'pomodoro', path: '../../assets/pomodoro.jpg' },
  { id: '4', label: 'Prosciutto', type: 'prosciutto', path: '../../assets/prosciutto.jpg' },
  { id: '5', label: 'Rucola', type: 'rucola', path: '../../assets/rucola.jpg' },
];

const buildControls = (props) => (
  <Row className="mt-5">
    {controls.map(item => {
      return <BuildControl
        key={item.id}
        label={item.label}
        type={item.type}
        path={item.path}
        added={() => props.ingredientAdded(item.type)}
        removed={() => props.ingredientRemoved(item.type)}
        disabled={props.disabled[item.type]} />
    })}
  </Row>
);

export default buildControls;
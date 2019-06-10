import * as paper from 'paper';

const item: paper.Item = new paper.TextItem();

item.hitTest(new paper.Point(10,10), { thisOptionDoesNotExist: 'whatever' });


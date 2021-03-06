import React, { PureComponent } from 'react';
import { Row, ButtonGroup, Button } from 'reactstrap';

export default class MovieTabs extends PureComponent {

  /* For React.Component */
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.sort_by !== this.props.sort_by) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = value => () => updateSortBy(value);
    const getClassLink = value => sort_by !== value;

    return (
      <Row className="ml-3">
        <ButtonGroup className="mb-4">
          <Button
            color="primary"
            outline={getClassLink('popularity.desc')}
            onClick={handleClick('popularity.desc')}
          >
            Popularity desc
            </Button>
          <Button
            color="primary"
            outline={getClassLink('revenue.desc')}
            onClick={handleClick('revenue.desc')}
          >
            Revenue desc
            </Button>
          <Button
            color="primary"
            outline={getClassLink('vote_average.desc')}
            onClick={handleClick('vote_average.desc')}
          >
            Vote average desc
            </Button>
        </ButtonGroup>
      </Row>
    );
  }
  
}
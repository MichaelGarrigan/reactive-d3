
import { max } from 'd3-array';

// @params :: 'children' - three subcategories as objects in an array
// @params :: 'year' - a string of ('2017'|'2018')
// @return :: an array of objects
export const sortMainCategoriesByYear = (children, year) => {
  const copy = [...children];

  return copy.sort( (a, b) => {
    if ( (a[`${year}_total`] - b[`${year}_total`]) > 0 ) {
      return -1;
    }
    else if ( (a[`${year}_total`] - b[`${year}_total`]) < 0 ) {
      return 1;
    } else return 0;
  })
};

// @params :: 'category' - an object (either - Car|SUV|Truck)
// @params :: 'year' - a string of ('2017'|'2018')
// @params :: 'rankBy' - a string of ('Yearly Increase'|'Sales Total')
// @return :: an array of objects
export const sortCategoryByRankBy = (category, year, rankBy) => {
  if (rankBy === 'Yearly Increase') {
    let copy = [...category.children];
    return copy.sort( (a, b) => {
      if ( (a.yearDiff - b.yearDiff) > 0 ) {
        return -1;
      }
      else if ( (a.yearDiff - b.yearDiff) < 0 ) {
        return 1;
      } else return 0;
    });
  } else {
    let copy = [...category.children];
    return copy.sort( (a, b) => {
      if ( (a[year] - b[year]) > 0 ) {
        return -1;
      }
      else if ( (a[year] - b[year]) < 0 ) {
        return 1;
      } else return 0;
    });
  }
};

// @params :: 'children' - three subcategories as objects in an array
// @params :: 'category' - a string of either 'All', 'Cars', 'SUVs' or 'Trucks'
// @return :: an object
export const lookupMainCategory = (children, category) => {
  for (let child of children) {
    if (child.name === category) {
      return child;
    }
  }
}

// @params :: 'props' - the props being passed to this component
// @return :: the highest number
export const calcMaxForAxis = props => {

  if (props.category === 'All') {
    let values = [];
    props.data.children.forEach( item => {
      values.push(item['2017_total']);
      values.push(item['2018_total']);
    });
    return max(values);
  } else {
    let values = [];
    let obj = lookupMainCategory(props.data.children, props.category);
    obj.children.forEach( item => {
      values.push(item['2017']);
      values.push(item['2018']);
    });
    return max(values);
  }
}

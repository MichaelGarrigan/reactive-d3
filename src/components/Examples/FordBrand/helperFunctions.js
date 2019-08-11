
import { max, extent } from 'd3-array';

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

// @params :: 'item' - an object describing the sales data for a vehicle model
// @return :: a tuple [ MIN, MAX ]
export const calcExtentForAxis = item => {
  let year17 = item['2017_total'] ? item['2017_total'] : item['2017'];
  let year18 = item['2018_total'] ? item['2018_total'] : item['2018'];
  let buff10Percent = Math.round(year18 * 0.1); 
  
  let tuple = extent([ year17, year18 ]);
  
  tuple[0] -= buff10Percent;
  tuple[1] += buff10Percent;
  
  return tuple;

}

// @params :: 'props' - the props being passed to this component
// @return :: an array of objects
export const formatData = props => {
  if (props.category === 'All') {
    return sortMainCategoriesByYear(
      props.DATA.children, 
      props.year
    );
  } else {
    return sortCategoryByRankBy(
      lookupMainCategory(props.DATA.children, props.category), 
      props.year,
      props.rankBy
    );
  }
}
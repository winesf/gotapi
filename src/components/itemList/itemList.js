// import React, {Component} from 'react';
// import './itemList.css';
// import Spinner from "../spinner";
// import GotService from "../../services/gotService";
//
// export class ItemList extends Component
// {
//     renderItems(arr) {
//       return arr.map((item ) => {
//         const {id} = item;
//         const label = this.props.renderItem(item);
//         return (
//           <li
//             key={id}
//             className="list-group-item"
//             onClick={() => this.props.onItemSelected(id)}>
//             {label}
//           </li>
//
//         )
//       })
//     }
//     render() {
//       const {data} = this.props;
//       const items = this.renderItems(data);
//         return (
//             <ul className="item-list list-group">
//               {items}
//             </ul>
//         );
//     }
// }
//
// ItemList.defaultProps = {
//   onItemSelected: () => {}
// }
//
//
// const withData = (View, getData) => {
//   return class extends Component{
//     state = {
//       data: null
//     }
//
//     componentDidMount() {
//       getData()
//         .then( (data) => {
//           this.setState({
//             data
//           })
//         })
//     }
//
//     render() {
//       const {data} = this.state;
//       if (!data) {
//         return <Spinner/>
//       }
//       return <View {...this.props} data={data}/>
//     }
//   }
// }
// const {getAllCharacters} = new GotService();
// export default withData(ItemList, getAllCharacters);
import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const {getData} = this.props;

    getData()
      .then( (itemList) => {
        this.setState({
          itemList
        })
      })
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;

      const label = this.props.renderItem(item);

      return (
        <li
          key={id}
          className="list-group-item"
          onClick={ () => this.props.onItemSelected(id)}>
          {label}
        </li>
      )
    })
  }

  render() {
    const {itemList} = this.state;

    if (!itemList) {
      return <Spinner/>
    }

    const items = this.renderItems(itemList);


    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

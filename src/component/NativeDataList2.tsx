import * as React from "react";

import { TouchableOpacity, Text, View, FlatList } from 'react-native';

import NativeControl from "../Interfaces/NativeControl";



interface DataListProps extends NativeControl {

    groupKey: string,

    itemKey: any,

    onClick: (e: any) => void,

    actionLinks: any,

    itemsSource: Array<any>,

    groupsSource?: Array<any>;

    groupId: string,

    groupText: string,

    expandable: boolean,

    noDataText: string,

    emptyListClassName: string,

}

export default class NativeDataList extends React.Component<DataListProps> {

    constructor(props) {

        super(props);

        let data = [];

        this.state = {

            selection: {},

            initial: this.props.itemsSource,

        };

        for (let ind in props.itemsSource) {

            let obj = props.itemsSource[ind];

            obj['expanded'] = obj.hasOwnProperty('items');

            data.push(obj);

        }

        //this.state = {

        //     data

        //}

    }



    handleClick = (item): void => {

        if (this.props.onClick)

            this.props.onClick(item);

    }

    _onExpand = (item, ind) => {

        if (item.hasOwnProperty('items')) {

            let { data } = this.state

            data[ind]['expanded'] = !data[ind]['expanded']

            this.setState({ data })

        }

    }





    groupBy = (objectArray: any, property: string) => {

        return objectArray.reduce((acc: any, obj: any) => {

            var key = obj[property];

            if (!acc[key]) {

                acc[key] = [];

            }

            acc[key].push(obj);

            return acc;

        }, {});

    }



    listItemClick = (e: any, key: any) => {

        if (this.props.onClick)

            this.props.onClick(e);

        this.togglePanel(key);

    }



    togglePanel = (key: any) => {

        this.setState({

            selection: {

                ...this.state.selection,

                [key]: !this.state.selection[key],

            }

        });

    }


    render() {
        let groupedItems = this.props.groupsSource
            ? this.groupBy(this.props.itemsSource, this.props.groupKey)
            : this.props.itemsSource;
        const children = this.props.children as (item: any) => React.ReactNode;
        const { } = this.props;
        let groupedObjectKey = []
        for(let ind in groupedItems){
            groupedObjectKey.push(ind)
        }
        console.log(JSON.stringify(groupedItems), groupedObjectKey)

        return (
                    <FlatList
                        data={this.props.groupsSource}
                      renderItem={({ item, index }) => {
                          return (

                                  <View key={item.id}>
                                      {groupedItems[item] && <View>
                                          <View style={{
                                              paddingHorizontal: 24,
                                              paddingVertical: 6,
                                              backgroundColor: '#F5F5F5',
                                              borderTopWidth: 1,
                                              borderTopColor: '#d7d7d7',
                                              borderBottomWidth: 1,
                                              borderBottomColor: "#d7d7d7",
                                              fontSize: 20.8,
                                              lineHeight: 28.8
                                          }}>
                                              <Text style={{fontSize: 20}}>{item}</Text>
                                          </View>
                                          {
                                              groupedItems[item].map((subItem: any) => {
                                                  return (
                                                      <TouchableOpacity key={subItem.id}
                                                                        onPress={() => this.listItemClick(subItem, this.props.itemKey(subItem))}
                                                                        style={{
                                                                            paddingHorizontal: 24,
                                                                            paddingVertical: 6,
                                                                            borderBottomWidth: 1,
                                                                            borderBottomColor: "#d7d7d7"
                                                                        }}>
                                                          <View style={{flexDirection: 'row'}}>
                                                              <Text style={{
                                                                  fontSize: 20,
                                                                  color: '#0061B8'
                                                              }}>{subItem.nickname}</Text>
                                                              <View style={{flex: 1}}/>
                                                              <Text style={{
                                                                  fontSize: 20,
                                                                  color: 'black'
                                                              }}>{Math.abs(subItem.availableBalance ? subItem.availableBalance : subItem.ledgerBalance)}</Text>
                                                          </View>

                                                          <View style={{flexDirection: 'row', marginTop: 2}}>
                                                              <Text style={{
                                                                  fontSize: 16,
                                                                  color: 'black'
                                                              }}>{subItem.accountNumber}</Text>
                                                              <View style={{flex: 1}}/>
                                                              <Text style={{
                                                                  fontSize: 16,
                                                                  color: 'black'
                                                              }}>{subItem.availableBalance ? 'Available Balance' : 'Current Balance'}</Text>
                                                          </View>
                                                      </TouchableOpacity>
                                                  );
                                              })
                                          }
                                      </View>
                                      }
                                  </View>

                          );
                      }}>
            </FlatList>
        );

        //if (this.props.expandable) {

        //     return (

        //           <FlatList

        //                  data={this.state.data}

        //                  extraData={this.state}

        //                  renderItem={this.props.groupSource ? ({ item, index }) => (

        //                         <View>

        //                               <TouchableOpacity onPress={() => this._onExpand(item, index)} style={{

        //                                      backgroundColor: '#E8E8E8',

        //                                      padding: 8

        //                               }} key={index}>

        //                                      <Text style={{ fontSize: 16 }}>{item.acType}</Text>

        //                               </TouchableOpacity>

        //                               {console.log({ label: item.label, expanded: item.expanded })}

        //                               {item.expanded === true &&

        //                                      item.hasOwnProperty('items') &&

        //                                      item.items.map((subItem, subIndex) => (

        //                                             <TouchableOpacity onPress={() => this.handleClick(subItem)}

        //                                                   style={{

        //                                                          padding: 12,

        //                                                          backgroundColor: 'white',

        //                                                          borderColor: '#ccc',

        //                                                          borderBottomWidth: item.items.length - 1 === subIndex ? 0 : 1

        //                                                   }} key={subIndex + '' + subIndex}>

        //                                                   <View style={{ flexDirection: 'row' }}>

        //                                                          <Text style={{

        //                                                                 fontSize: 20,

        //                                                                 color: '#4B759B'

        //                                                          }}>{subItem.name}</Text>

        //                                                          <View style={{ flex: 1 }} />

        //                                                          <Text style={{

        //                                                                 fontSize: 20,

        //                                                                 color: 'black'

        //                                                          }}>{subItem.balance}</Text>

        //                                                   </View>

        //                                                   <View style={{ flexDirection: 'row', marginTop: 2 }}>

        //                                                          <Text style={{

        //                                                                 fontSize: 14,

        //                                                                 color: 'black'

        //                                                          }}>{subItem.xType}</Text>

        //                                                          <View style={{ flex: 1 }} />

        //                                                          <Text style={{

        //                                                                 fontSize: 14,

        //                                                                 color: 'black'

        //                                                          }}>{subItem.availableType === ''

        //                                                                 ? subItem.outStanding

        //                                                                 : subItem.availableType + ' Balance'}</Text>

        //                                                   </View>

        //                                             </TouchableOpacity>

        //                                      ))}

        //                         </View>

        //                  ) : <View>No group Source</View>} />

        //     );

        //} else {

        //     return (

        //           <FlatList

        //                  data={this.state.data}

        //                  extraData={this.state}

        //                  renderItem={this.props.groupSource ? ({ item, index }) => (

        //                         <View>

        //                               <TouchableOpacity onPress={() => this._onExpand(item, index)} style={{

        //                                      backgroundColor: '#E8E8E8',

        //                                      padding: 8

        //                               }} key={index}>

        //                                      <Text style={{ fontSize: 16 }}>{item.acType}</Text>

        //                               </TouchableOpacity>

        //                               {console.log({ label: item.label, expanded: item.expanded })}

        //                               {item.expanded === true &&

        //                                      item.hasOwnProperty('items') &&

        //                                      item.items.map((subItem, subIndex) => (

        //                                             <TouchableOpacity onPress={() => this.handleClick(subItem)}

        //                                                   style={{

        //                                                          padding: 12,

        //                                                          backgroundColor: 'white',

        //                                                          borderColor: '#ccc',

        //                                                          borderBottomWidth: item.items.length - 1 === subIndex ? 0 : 1

        //                                                   }} key={subIndex + '' + subIndex}>

        //                                                   <View style={{ flexDirection: 'row' }}>

        //                                                          <Text style={{

        //                                                                 fontSize: 20,

        //                                                                 color: '#4B759B'

        //                                                          }}>{subItem.name}</Text>

        //                                                          <View style={{ flex: 1 }} />

        //                                                          <Text style={{

        //                                                                 fontSize: 20,

        //                                                                 color: 'black'

        //                                                          }}>{subItem.balance}</Text>

        //                                                   </View>

        //                                                   <View style={{ flexDirection: 'row', marginTop: 2 }}>

        //                                                          <Text style={{

        //                                                                 fontSize: 14,

        //                                                                 color: 'black'

        //                                                          }}>{subItem.xType}</Text>

        //                                                          <View style={{ flex: 1 }} />

        //                                                          <Text style={{

        //                                                                 fontSize: 14,

        //                                                                 color: 'black'

        //                                                          }}>{subItem.availableType === ''

        //                                                                 ? subItem.outStanding

        //                                                                 : subItem.availableType + ' Balance'}</Text>

        //                                                   </View>

        //                                             </TouchableOpacity>

        //                                      ))}

        //                         </View>

        //                  ) : <View>No group Source</View>} />

        //     );;

        //}

    }

}

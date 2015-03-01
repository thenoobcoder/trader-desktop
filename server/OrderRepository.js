/**
 * Copyright 2013 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * OrderRepository.js
 *
 * @author Naresh Bhatia
 */

/*jshint node:true */

var _     = require('underscore'),
    Order = require('./Order.js');

var orders = [{
    "id": 78,
    "creationTime": "2013-04-16T22:41:51.380Z",
    "side": "Buy",
    "symbol": "DIS",
    "quantity": 983444,
    "quantityPlaced": 983444,
    "quantityExecuted": 983444,
    "limitPrice": 31.46,
    "priority": 50,
    "status": "Executed",
    "traderId": "AM"
  }];

exports.persist = function(orderParams) {
    'use strict';
    var order = new Order(orderParams);
    orders.push(order);
    return order;
};

exports.getAll = function() {
    'use strict';
    return orders;
};

exports.find = function(properties) {
    'use strict';
    _.where(orders, properties);
};

exports.cancel = function(id) {
    'use strict';
    var matchedOrders = _.where(orders, {id: id});
    if (matchedOrders.length === 1) {
        matchedOrders[0].status = 'Canceled';
    }
};

exports.deleteAll = function() {
    'use strict';
    orders.length = 0;
};
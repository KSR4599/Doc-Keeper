'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\mydocs.js?entry';


var Test = function (_Component) {
  (0, _inherits3.default)(Test, _Component);

  (0, _createClass3.default)(Test, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var _ref$query = _ref.query,
            names = _ref$query.names,
            ipfs = _ref$query.ipfs,
            status = _ref$query.status;
        var accounts, account;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                account = accounts[0];

                console.log("Your Account is :", account);
                return _context.abrupt('return', { names: names, ipfs: ipfs, status: status, account: account });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Test(props) {
    (0, _classCallCheck3.default)(this, Test);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));

    console.log("In Contructor");

    _this.state = {
      names: _this.props.names,
      ipfs: _this.props.ipfs,
      status: _this.props.status
    };

    return _this;
  }

  (0, _createClass3.default)(Test, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', { align: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), '  ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Names : '), '    ', _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, this.props.names.map(function (name, index) {
        return _react2.default.createElement(_semanticUiReact.List.Item, { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }), ' ', name, ' ');
      }), ' ')), _react2.default.createElement(_semanticUiReact.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Documents:'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.ipfs.map(function (name, index) {
        return _react2.default.createElement(_semanticUiReact.List.Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }), _react2.default.createElement('a', { href: 'https://ipfs.io/ipfs/' + name, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: 'https://thumbs.gfycat.com/ColorlessGrouchyBear-size_restricted.gif', size: 'tiny', rounded: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })), ' ');
      }))), _react2.default.createElement(_semanticUiReact.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Verification Status :'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.props.status.map(function (name, index) {
        return _react2.default.createElement(_semanticUiReact.List.Item, { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, ' ', _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }), name, ' ');
      }))))));
    }
  }]);

  return Test;
}(_react.Component);

exports.default = Test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxteWRvY3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHcmlkIiwiQnV0dG9uIiwiSWNvbiIsIkltYWdlIiwiTGlzdCIsIndlYjMiLCJUZXN0IiwicXVlcnkiLCJuYW1lcyIsImlwZnMiLCJzdGF0dXMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInN0YXRlIiwibWFwIiwibmFtZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFNLEFBQU87O0FBQ3BDLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs4QkFDNEIsQTtZQUFTLEEsbUJBQUEsQTtZLEFBQU8sa0JBQUEsQTtZQUFNLEEsb0IsQUFBQTs7Ozs7Ozt1QkFHN0IsY0FBQSxBQUFLLElBQUwsQUFBUyxBOzttQkFBMUI7QSxvQ0FDQTtBLDBCQUFVLFNBQUEsQUFBUyxBLEFBQ3pCOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxxQkFBWixBQUFpQztpREFDMUIsRUFBRSxPQUFGLE9BQVUsTUFBVixNQUFpQixRQUFqQixRQUF5QixTLEFBQXpCOzs7Ozs7Ozs7Ozs7Ozs7QUFLVDs7O2dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0lBQUEsQUFDWCxBQUNSOztZQUFBLEFBQVEsSUFBUixBQUFZLEFBRVY7O1VBQUEsQUFBSzthQUNPLE1BQUEsQUFBSyxNQURKLEFBQ1UsQUFDbkI7WUFBTyxNQUFBLEFBQUssTUFGSCxBQUVTLEFBQ2xCO2NBQVEsTUFBQSxBQUFLLE1BUEEsQUFJakIsQUFBYSxBQUdVO0FBSFYsQUFDVDs7V0FRTDs7Ozs7NkJBSUcsQUFDRTs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNOO0FBRE07QUFBQSxPQUFBLGtCQUNOLGNBQUEsU0FBSyxPQUFMLEFBQVc7b0JBQVg7c0JBQUEsQUFDQTtBQURBOzs7b0JBQ0E7c0JBREEsQUFDQTtBQUFBO0FBQUEsVUFBVTs7b0JBQUE7c0JBRFYsQUFDVTtBQUFBO0FBQUEsVUFBVzs7b0JBQUE7c0JBRHJCLEFBQ3FCLEFBQ2Y7QUFEZTtBQUFBLDBCQUNmLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0Q7QUFEQztBQUFBLHlCQUNELEFBQUM7O29CQUFEO3NCQUFBLEFBQ1E7QUFEUjtBQUFBLHlCQUNRLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURSLEFBQ1EsYUFBcUIsd0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDcEI7QUFEb0I7QUFBQSxjQUNwQixBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksVUFBQSxBQUFTLE1BQVQsQUFBZSxPQUFNLEFBQzFDOytCQUFTLGNBQUQsc0JBQUEsQUFBTSxRQUFLLEtBQVgsQUFBaUI7c0JBQWpCO3dCQUFBO0FBQUE7U0FBQSxFQUEwQjs7c0JBQUE7d0JBQTFCLEFBQTBCLEFBQVM7QUFBVDtBQUFBOztzQkFBUzt3QkFBbkMsQUFBbUM7QUFBQTtBQUFBLFlBQVcsS0FBOUMsTUFBUixBQUFRLEFBQ0c7QUFIUyxBQUNwQixVQUhSLEFBQ0QsQUFDNkIsQUFNaEMsdUJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDZ0I7QUFEaEI7QUFBQSx5QkFDZ0IsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRGhCLEFBQ2dCLEFBQ0EsK0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLElBQUksVUFBQSxBQUFTLE1BQVQsQUFBZSxPQUFNLEFBQzVDOytCQUFRLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBWTs7c0JBQUE7d0JBQVosQUFBWSxBQUFTO0FBQVQ7QUFBQSw0QkFBUyxjQUFBLE9BQUcsTUFBTywwQkFBVixBQUFrQyxNQUFNLFFBQXhDLEFBQStDO3NCQUEvQzt3QkFBQSxBQUF3RDtBQUF4RDsyQkFBd0QsQUFBQyx3Q0FBTSxLQUFQLEFBQVcsc0VBQXNFLE1BQWpGLEFBQXNGLFFBQU8sU0FBN0Y7c0JBQUE7d0JBQTdFLEFBQXFCLEFBQXdEO0FBQUE7YUFBcEYsQUFBTyxBQUNOO0FBWmYsQUFRSixBQUVnQixBQUFLLEFBS0gsNEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFHRjtBQUhFO0FBQUEseUJBR0YsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEUsQUFHRixBQUNBLDBDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixJQUFJLFVBQUEsQUFBUyxNQUFULEFBQWUsT0FBTSxBQUM3QzsrQkFBUSxjQUFELHNCQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWlCO3NCQUFqQjt3QkFBQTtBQUFBO1NBQUEsRUFBMEI7O3NCQUFBO3dCQUExQixBQUEwQixBQUFTO0FBQVQ7QUFBQTs7c0JBQVM7d0JBQW5DLEFBQW1DLEFBQVU7QUFBVjtBQUFBLFlBQW5DLE1BQVAsQUFBTyxBQUNQO0FBekJqQixBQUNFLEFBQ04sQUFFTSxBQWVjLEFBSUYsQUFBSyxBQVdwQjs7Ozs7QUFoRVksQSxBQW9FZjs7a0JBQUEsQUFBZSIsImZpbGUiOiJteWRvY3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva3NyZWQvRG93bmxvYWRzL1p6Wi9Eb2N1bWVudC1LZWVwZXItbWFzdGVyIn0=
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

var _store = require('../ethereum/store');

var _store2 = _interopRequireDefault(_store);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\verify.js?entry';


var Test = function (_Component) {
  (0, _inherits3.default)(Test, _Component);

  (0, _createClass3.default)(Test, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var _ref$query = _ref.query,
            ipfs = _ref$query.ipfs,
            ids = _ref$query.ids;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', { ipfs: ipfs, ids: ids });

              case 1:
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
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Test);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));

    _this.onChange = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({ id: event.target.value });

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.onClick = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var accounts, account, docx;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                _context3.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context3.sent;
                account = accounts[0];
                _context3.next = 7;
                return _store2.default.methods.verifyDoc(_this.state.id).send({
                  from: account
                });

              case 7:
                docx = _context3.sent;

                console.log("Document verified Succesfully! :", docx);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    console.log("In Contructor");

    _this.state = {
      id: '',
      message: 'If Everything is Correct. Click the confirm button!'
    };

    _this.onClick = _this.onClick.bind(_this);
    _this.onChange = _this.onChange.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Test, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('ol', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Documents : '), '    ', _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.props.ipfs.map(function (name) {
        return _react2.default.createElement('li', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, ' ', _react2.default.createElement('a', { href: 'https://ipfs.io/ipfs/' + name, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, ' Click here'), ' ');
      }), ' ')), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'ID :'), '  ', _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, this.props.ids.map(function (name, index) {
        return _react2.default.createElement('li', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, name);
      })))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('form', { onSubmit: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: this.onChange, placeholder: 'Enter the id of document', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { animated: true, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Verify'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'angle double right', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })))));
    }
  }]);

  return Test;
}(_react.Component);

exports.default = Test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx2ZXJpZnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHcmlkIiwiQnV0dG9uIiwiSWNvbiIsImVzdG9yZSIsIndlYjMiLCJUZXN0IiwicXVlcnkiLCJpcGZzIiwiaWRzIiwicHJvcHMiLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJpZCIsInRhcmdldCIsInZhbHVlIiwib25DbGljayIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFjY291bnQiLCJtZXRob2RzIiwidmVyaWZ5RG9jIiwic3RhdGUiLCJzZW5kIiwiZnJvbSIsImRvY3giLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImJpbmQiLCJtYXAiLCJuYW1lIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7OzhCLEFBSTRCO1lBQVMsQSxrQkFBQSxBO1ksQUFBTSxpQkFBQSxBOzs7OztpREFFdEMsRUFBRSxNQUFGLE1BQVMsSyxBQUFUOzs7Ozs7Ozs7Ozs7Ozs7QUFJUjs7O2dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O2tJQUFBLEFBQ1o7O1VBRFksQUFnQnBCLHVCQWhCb0I7MkZBZ0JULGtCQUFBLEFBQU0sT0FBTjt3RUFBQTtvQkFBQTsrQ0FBQTttQkFDVDtzQkFBQSxBQUFLLFNBQVMsRUFBQyxJQUFHLE1BQUEsQUFBTSxPQURmLEFBQ1QsQUFBYyxBQUFpQjs7bUJBRHRCO21CQUFBO2lDQUFBOztBQUFBO3FCQUFBO0FBaEJTOzs0QkFBQTtpQ0FBQTtBQUFBO0FBQUE7O1VBQUEsQUFxQnBCLHNCQXJCb0I7MkZBcUJWLGtCQUFBLEFBQU8sT0FBUDsrQkFBQTt3RUFBQTtvQkFBQTsrQ0FBQTttQkFDUjtzQkFEUSxBQUNSLEFBQU07aUNBREU7dUJBRVcsY0FBQSxBQUFLLElBRmhCLEFBRVcsQUFBUzs7bUJBQTFCO0FBRk0scUNBR047QUFITSwwQkFHSSxTQUhKLEFBR0ksQUFBUztpQ0FIYjt1Q0FJSyxBQUFPLFFBQVAsQUFBZSxVQUM5QixNQUFBLEFBQUssTUFEVSxBQUNKLElBREksQUFFZjt3QkFOVSxBQUlLLEFBRVYsQUFDQztBQURELEFBQ04saUJBSGdCOzttQkFBYjtBQUpRLGlDQVNaOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxvQ0FUQSxBQVNaLEFBQWdEOzttQkFUcEM7bUJBQUE7aUNBQUE7O0FBQUE7cUJBQUE7QUFyQlU7OzRCQUFBO2lDQUFBO0FBQUE7QUFFcEI7O1lBQUEsQUFBUSxJQUFSLEFBQVksQUFHVjs7VUFBQSxBQUFLO1VBQVEsQUFDSixBQUNMO2VBRkosQUFBYSxBQUVBLEFBSWI7QUFOYSxBQUNUOztVQUtKLEFBQUssVUFBVSxNQUFBLEFBQUssUUFBTCxBQUFhLEtBQTVCLEFBQ0E7VUFBQSxBQUFLLFdBQVcsTUFBQSxBQUFLLFNBQUwsQUFBYyxLQVpaLEFBWWxCOztXQUVEOzs7Ozs2QkFvQkgsQUFDSTs2QkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUVBO0FBRkE7QUFBQSxPQUFBLGtCQUVBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBRU87QUFGUDtBQUFBLHlCQUVPLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZQLEFBRU8saUJBQXlCLHdCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ3hCO0FBRHdCO0FBQUEsY0FDeEIsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFJLFVBQUEsQUFBUyxNQUFLLEFBQ3RCOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQUsscUJBQUEsY0FBQSxPQUFHLE1BQU8sMEJBQVYsQUFBa0MsTUFBTSxRQUF4QyxBQUErQztzQkFBL0M7d0JBQUE7QUFBQTtXQUFMLEFBQUssZ0JBQVosQUFBTyxBQUNSO0FBSGEsQUFDeEIsVUFKUixBQUNBLEFBRWdDLEFBTXBDLHVCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ2dCO0FBRGhCO0FBQUEseUJBQ2dCLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURoQixBQUNnQixTQUFlLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQUksVUFBQSxBQUFTLE1BQVQsQUFBZSxPQUFNLEFBQ3hEOytCQUFPLGNBQUEsUUFBSSxLQUFKLEFBQVU7c0JBQVY7d0JBQUEsQUFBbUI7QUFBbkI7U0FBQSxFQUFQLEFBQU8sQUFDUjtBQWRmLEFBRUEsQUFTSixBQUMrQixBQUFLLEFBTXBDOztvQkFBQTtzQkFsQkksQUFrQkosQUFBSztBQUFMO0FBQUE7O29CQUFLO3NCQWxCRCxBQWtCQyxBQUFLO0FBQUw7QUFBQTs7b0JBQUs7c0JBbEJOLEFBa0JNLEFBQUs7QUFBTDtBQUFBOztvQkFBSztzQkFsQlgsQUFrQlcsQUFBSztBQUFMO0FBQUE7O29CQUFLO3NCQWxCaEIsQUFrQmdCLEFBQUs7QUFBTDtBQUFBOztvQkFBSztzQkFsQnJCLEFBa0JxQixBQUNaO0FBRFk7QUFBQSwwQkFDWixjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDQTtBQURBO2tEQUNPLE1BQVAsQUFBYSxRQUFRLFVBQVksS0FBakMsQUFBc0MsVUFBVSxhQUFoRCxBQUE0RDtvQkFBNUQ7c0JBREEsQUFDQSxBQUNUO0FBRFM7MEJBQ1QsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE1BQWpCLEFBQXNCO29CQUF0QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSwyQkFBQyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBekJKLEFBQ0EsQUFtQlMsQUFFVCxBQUVFLEFBQ0UsQUFTRDtBQVRDOzs7Ozs7QUF0RVcsQSxBQW1GZjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ2ZXJpZnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva3NyZWQvRG93bmxvYWRzL1p6Wi9Eb2N1bWVudC1LZWVwZXItbWFzdGVyIn0=
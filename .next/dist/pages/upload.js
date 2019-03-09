'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

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

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\upload.js?entry';


var Upload = function (_Component) {
    (0, _inherits3.default)(Upload, _Component);

    function Upload() {
        (0, _classCallCheck3.default)(this, Upload);

        return (0, _possibleConstructorReturn3.default)(this, (Upload.__proto__ || (0, _getPrototypeOf2.default)(Upload)).apply(this, arguments));
    }

    (0, _createClass3.default)(Upload, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('div', { align: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'Your Account Number : ', this.props.account), _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, 'Add your Aadhar Here :'), _react2.default.createElement(_semanticUiReact.Image, { src: 'https://cms-img.coverfox.com/aadhar-card.jpg', size: 'medium', circular: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), '    ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), '    ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), '    ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), '    ', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement('form', { method: 'post', action: '/upload', id: 'submit-form', encType: 'multipart/form-data', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('input', { type: 'hidden', name: 'name', value: 'aadhar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('input', { type: 'hidden', name: 'index', value: '1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('input', { type: 'hidden', name: 'owner', value: this.props.account, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), _react2.default.createElement('input', { type: 'file', name: 'doc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Upload'), _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'upload', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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

                                console.log("ACCOUNT :", account);
                                return _context.abrupt('return', { account: account });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Upload;
}(_react.Component);

exports.default = Upload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx1cGxvYWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkltYWdlIiwiZXN0b3JlIiwid2ViMyIsIlVwbG9hZCIsInByb3BzIiwiYWNjb3VudCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFNOztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFHWCxBOzs7Ozs7Ozs7OztpQ0FZQSxBQUNFO21DQUNKLEFBQUM7OzhCQUFEO2dDQUFBLEFBR0E7QUFIQTtBQUFBLGFBQUEsa0JBR0EsY0FBQSxTQUFLLE9BQUwsQUFBVzs4QkFBWDtnQ0FBQSxBQUNBO0FBREE7Ozs4QkFDQTtnQ0FEQSxBQUNBLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUEyQiwrQkFBQSxBQUFLLE1BRmhDLEFBRUEsQUFBc0MsQUFDdEMsMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEEsQUFHQSxBQUNBLDJDQUFBLEFBQUMsd0NBQU0sS0FBUCxBQUFXLGdEQUErQyxNQUExRCxBQUErRCxVQUFTLFVBQXhFOzhCQUFBO2dDQUpBLEFBSUEsQUFFQTtBQUZBOzs7OEJBRUE7Z0NBTkEsQUFNQTtBQUFBO0FBQUEsZ0JBQWE7OzhCQUFBO2dDQU5iLEFBTWE7QUFBQTtBQUFBLGdCQUFhOzs4QkFBQTtnQ0FOMUIsQUFNMEI7QUFBQTtBQUFBLGdCQUFhOzs4QkFBQTtnQ0FOdkMsQUFNdUM7QUFBQTtBQUFBLGdCQUFhOzs4QkFBQTtnQ0FOcEQsQUFNb0QsQUFHeEQ7QUFId0Q7QUFBQSxnQ0FHeEQsY0FBQSxVQUFNLFFBQU4sQUFBYSxRQUFPLFFBQXBCLEFBQTJCLFdBQVUsSUFBckMsQUFBd0MsZUFBYyxTQUF0RCxBQUE4RDs4QkFBOUQ7Z0NBQUEsQUFDQTtBQURBO3dEQUNPLE1BQVAsQUFBWSxVQUFTLE1BQXJCLEFBQTBCLFFBQU8sT0FBakMsQUFBdUM7OEJBQXZDO2dDQURBLEFBQ0EsQUFDQTtBQURBO3lEQUNPLE1BQVAsQUFBWSxVQUFTLE1BQXJCLEFBQTBCLFNBQVEsT0FBbEMsQUFBd0M7OEJBQXhDO2dDQUZBLEFBRUEsQUFDQTtBQURBO3lEQUNPLE1BQVAsQUFBWSxVQUFTLE1BQXJCLEFBQTBCLFNBQVEsT0FBTyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7OEJBQXBEO2dDQUhBLEFBR0EsQUFDQTtBQURBO3lEQUNPLE1BQVAsQUFBWSxRQUFPLE1BQW5CLEFBQXdCOzhCQUF4QjtnQ0FKQSxBQUlBLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFVBQVIsQUFBaUIsUUFBTyxNQUF4QixBQUE2Qjs4QkFBN0I7Z0NBQUEsQUFDTTtBQUROOytCQUNPLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCOzhCQUFBO2dDQUFBO0FBQUE7ZUFETixBQUNNLEFBQ0EsMkJBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7OEJBQUE7Z0NBQUEsQUFDRTtBQURGOytCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQXJCQSxBQUNKLEFBR0EsQUFTSixBQUtBLEFBRU0sQUFDRSxBQVdEO0FBWEM7Ozs7Ozs7Ozs7Ozs7dUNBOUJ1QixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O2lDQUExQjtBLG9EQUNBO0EsMENBQVUsU0FBQSxBQUFTLEEsQUFDekI7O3dDQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUI7aUVBQ2xCLEVBQUUsU0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUE0sQSxBQWlEakI7O2tCQUFBLEFBQWUiLCJmaWxlIjoidXBsb2FkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2tzcmVkL0Rvd25sb2Fkcy9aelovRG9jdW1lbnQtS2VlcGVyLW1hc3RlciJ9
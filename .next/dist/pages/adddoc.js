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

var _jsxFileName = 'C:\\Users\\ksred\\Downloads\\ZzZ\\Document-Keeper-master\\pages\\adddoc.js?entry';


var AddDoc = function (_Component) {
    (0, _inherits3.default)(AddDoc, _Component);

    function AddDoc() {
        (0, _classCallCheck3.default)(this, AddDoc);

        return (0, _possibleConstructorReturn3.default)(this, (AddDoc.__proto__ || (0, _getPrototypeOf2.default)(AddDoc)).apply(this, arguments));
    }

    (0, _createClass3.default)(AddDoc, [{
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
            }), _react2.default.createElement('h1', {
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
                    lineNumber: 32
                }
            }, _react2.default.createElement('input', { type: 'hidden', name: 'name', value: 'aadhar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement('input', { type: 'hidden', name: 'index', value: '1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('input', { type: 'hidden', name: 'owner', value: this.props.account, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('input', { type: 'file', name: 'doc', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Upload'), _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'upload', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
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

    return AddDoc;
}(_react.Component);

exports.default = AddDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhZGRkb2MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkltYWdlIiwiZXN0b3JlIiwid2ViMyIsIkFkZERvYyIsInByb3BzIiwiYWNjb3VudCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFNOztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUdYOzs7Ozs7Ozs7OztpQ0FZQSxBQUNFO21DQUNKLEFBQUM7OzhCQUFEO2dDQUFBLEFBR0E7QUFIQTtBQUFBLGFBQUEsa0JBR0EsY0FBQSxTQUFLLE9BQUwsQUFBVzs4QkFBWDtnQ0FBQSxBQUNBO0FBREE7Ozs4QkFDQTtnQ0FEQSxBQUNBLEFBRUE7QUFGQTtBQUFBLGdDQUVBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhBLEFBR0EsQUFDQSwyQ0FBQSxBQUFDLHdDQUFNLEtBQVAsQUFBVyxnREFBK0MsTUFBMUQsQUFBK0QsVUFBUyxVQUF4RTs4QkFBQTtnQ0FKQSxBQUlBLEFBRUE7QUFGQTs7OzhCQUVBO2dDQU5BLEFBTUE7QUFBQTtBQUFBLGdCQUFhOzs4QkFBQTtnQ0FOYixBQU1hO0FBQUE7QUFBQSxnQkFBYTs7OEJBQUE7Z0NBTjFCLEFBTTBCO0FBQUE7QUFBQSxnQkFBYTs7OEJBQUE7Z0NBTnZDLEFBTXVDO0FBQUE7QUFBQSxnQkFBYTs7OEJBQUE7Z0NBTnBELEFBTW9ELEFBQ3hEO0FBRHdEO0FBQUEsZ0NBQ3hELGNBQUEsVUFBTSxRQUFOLEFBQWEsUUFBTyxRQUFwQixBQUEyQixXQUFVLElBQXJDLEFBQXdDLGVBQWMsU0FBdEQsQUFBOEQ7OEJBQTlEO2dDQUFBLEFBQ0E7QUFEQTt3REFDTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEwQixRQUFPLE9BQWpDLEFBQXVDOzhCQUF2QztnQ0FEQSxBQUNBLEFBQ0E7QUFEQTt5REFDTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEwQixTQUFRLE9BQWxDLEFBQXdDOzhCQUF4QztnQ0FGQSxBQUVBLEFBQ0E7QUFEQTt5REFDTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEwQixTQUFRLE9BQU8sS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0FIQSxBQUdBLEFBQ0E7QUFEQTt5REFDTyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF3Qjs4QkFBeEI7Z0NBSkEsQUFJQSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxVQUFSLEFBQWlCLFFBQU8sTUFBeEIsQUFBNkI7OEJBQTdCO2dDQUFBLEFBQ007QUFETjsrQkFDTyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjs4QkFBQTtnQ0FBQTtBQUFBO2VBRE4sQUFDTSxBQUNBLDJCQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCOzhCQUFBO2dDQUFBLEFBQ0U7QUFERjsrQkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FuQkEsQUFDSixBQUdBLEFBT0osQUFLQSxBQUVNLEFBQ0UsQUFTRDtBQVRDOzs7Ozs7Ozs7Ozs7O3VDQTVCdUIsY0FBQSxBQUFLLEksQUFBTCxBQUFTOztpQ0FBMUI7QSxvREFDQTtBLDBDQUFVLFMsQUFBQSxBQUFTLEFBQ3pCOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxhQUFaLEFBQXlCO2lFQUNsQixFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBNLEEsQUE2Q2pCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFkZGRvYy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9rc3JlZC9Eb3dubG9hZHMvWnpaL0RvY3VtZW50LUtlZXBlci1tYXN0ZXIifQ==
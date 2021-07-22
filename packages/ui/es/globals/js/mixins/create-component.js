function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default function (ToMix) {
  var CreateComponent = /*#__PURE__*/function (_ToMix) {
    _inherits(CreateComponent, _ToMix);

    var _super = _createSuper(CreateComponent);

    /**
     * The component instances managed by this component.
     * Releasing this component also releases the components in `this.children`.
     * @type {Component[]}
     */

    /**
     * Mix-in class to manage lifecycle of component.
     * The constructor sets up this component's effective options,
     * and registers this component't instance associated to an element.
     * @implements Handle
     * @param {HTMLElement} element The element working as this component.
     * @param {Object} [options] The component options.
     */
    function CreateComponent(element) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CreateComponent);

      _this = _super.call(this, element, options);

      _defineProperty(_assertThisInitialized(_this), "children", []);

      if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        throw new TypeError('DOM element should be given to initialize this widget.');
      }
      /**
       * The element the component is of.
       * @type {Element}
       */


      _this.element = element;
      /**
       * The component options.
       * @type {Object}
       */

      _this.options = Object.assign(Object.create(_this.constructor.options), options);

      _this.constructor.components.set(_this.element, _assertThisInitialized(_this));

      return _this;
    }
    /**
     * Instantiates this component of the given element.
     * @param {HTMLElement} element The element.
     */


    _createClass(CreateComponent, [{
      key: "release",
      value:
      /**
       * Releases this component's instance from the associated element.
       */
      function release() {
        for (var child = this.children.pop(); child; child = this.children.pop()) {
          child.release();
        }

        this.constructor.components.delete(this.element);
        return null;
      }
    }], [{
      key: "create",
      value: function create(element, options) {
        return this.components.get(element) || new this(element, options);
      }
    }]);

    return CreateComponent;
  }(ToMix);

  return CreateComponent;
}
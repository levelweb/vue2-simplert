export default {
  props: {
    useRadius: true,
    useIcon: true
  },

  data () {
    return {
      DEFAULT_TYPE: "info",
      DEFAULT_BTN_CLOSE_TEXT: "Close",
      DEFAULT_BTN_CONFIRM_TEXT: "Confirm",
      INVALID_TYPE: "INVALID_TYPE",
      // hide/show alert
      showSimplert: false,
      // basic setup
      title: "",
      message: "",        
      type: this.DEFAULT_TYPE, // info (default), success, warning, error
      customClass: '',
      customIconUrl: '',
      // close button
      customCloseBtnText: this.DEFAULT_BTN_CLOSE_TEXT,
      customCloseBtnClass: '',
      onClose: null,
      // confirm button
      useConfirmBtn: false,
      customConfirmBtnText: this.DEFAULT_BTN_CONFIRM_TEXT,
      customConfirmBtnClass: '',
      onConfirm: null
    };
  },

  computed: {
    classSimplert: function () {
      let clasz = this.customClass
      if (this.showSimplert) {
        clasz = this.customClass + ' simplert--shown'
      } 
      return clasz
    },

    classContent: function () {
      let clasz = ''
      if (this.useRadius) {
        clasz = 'simplert__content--radius'
      } 
      return clasz
    },

    classBtnClose: function () {
      let clasz = this.customCloseBtnClass
      if (this.useRadius) {
        clasz = this.customCloseBtnClass + ' simplert__close--radius'
      } 
       return clasz
    },

    classBtnConfirm: function () {
      let clasz = this.customConfirmBtnClass
      if (this.useRadius) {
        clasz = this.customConfirmBtnClass + ' simplert__confirm--radius'
      } 
       return clasz
    }
  },

  methods: {
    closeOverlay: function (e) {
      let _self = this
      if (e.target.className.indexOf('simplert--shown') > 0) {
        _self.closeSimplert(e)
      }
    },

    whenConfirm: function (e) {
      let _self = this
      e.preventDefault()

      _self.showSimplert = false

      if (_self.onConfirm !== null) {
        _self.onConfirm()
      }
    },

    closeSimplert: function (e) {
      let _self = this
      e.preventDefault()

      _self.showSimplert = false

      if (_self.onClose !== null) {
        _self.onClose()
      }
    },

    openSimplert: function (obj) {
      let _self = this
      _self.showSimplert = true

      if (typeof obj !== 'undefined') {
        _self.title = obj.title

        if (typeof obj.message !== 'undefined') {
          _self.message = obj.message
        } else {
          _self.message = ''
        }

        if (typeof obj.type !== 'undefined') {
          _self.type = obj.type
        } else {
          _self.type = _self.DEFAULT_TYPE
        }

        if (typeof obj.customClass !== 'undefined') {
          _self.customClass = obj.customClass
        } else {
          _self.customClass = ''
        }

        if (typeof obj.customIconUrl !== 'undefined' && obj.customCloseBtnText !== '') {
          _self.customIconUrl = obj.customIconUrl
          _self.type = _self.INVALID_TYPE
        } else {
          _self.customIconUrl = ''
        }

        // close button setup
        if (typeof obj.customCloseBtnText !== 'undefined' && obj.customCloseBtnText !== '') {
          _self.customCloseBtnText = obj.customCloseBtnText
        } else {
          _self.customCloseBtnText = _self.DEFAULT_BTN_CLOSE_TEXT
        }

        if (typeof obj.customCloseBtnClass !== 'undefined') {
          _self.customCloseBtnClass = obj.customCloseBtnClass
        } else {
          _self.customCloseBtnClass = ''
        }

        if (typeof obj.onClose !== 'undefined' && obj.onClose !== null) {
          _self.onClose = obj.onClose
        } else {
          _self.onClose = null
        }

        // confirm button setup
        if (typeof obj.useConfirmBtn !== 'undefined') {
          _self.useConfirmBtn = obj.useConfirmBtn
        } else {
          _self.useConfirmBtn = false
        }

        if (typeof obj.customConfirmBtnText !== 'undefined' && obj.customConfirmBtnText !== '') {
          _self.customConfirmBtnText = obj.customConfirmBtnText
        } else {
          _self.customConfirmBtnText = _self.DEFAULT_BTN_CONFIRM_TEXT
        }

        if (typeof obj.customConfirmBtnClass !== 'undefined') {
          _self.customConfirmBtnClass = obj.customConfirmBtnClass
        } else {
          _self.customConfirmBtnClass = ''
        }

        if (typeof obj.onConfirm !== 'undefined' && obj.onConfirm !== null) {
          _self.onConfirm = obj.onConfirm
        } else {
          _self.onConfirm = null
        }

      }
    }
  }
}

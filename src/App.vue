<template>
  <div class="grid__row">

    <div class="fixed-top">      
      <a class="button button--radius button--green btn-top"  href="https://github.com/mazipan/vue2-simplert/wiki"
         target="_blank">
          <i class="fa fa-book" aria-hidden="true"></i> Docs
      </a> 
      <a class="button button--radius button--blue btn-top"  href="https://github.com/mazipan/vue2-simplert"
         target="_blank">
          <i class="fa fa-download" aria-hidden="true"></i> Download
      </a> 
    </div>  

    <div class="header__title">      
      <img src="https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png" 
      alt="Vue2-Simplert" title="Vue2-Simplert" />

      <h1 class="header__subtitle">
        Vue 2 Simple Alert Component (SweetAlert Inspired) By Irfan Maulana
      </h1>
    </div>

    <div class="grid__row content centered">
      <h2>Example</h2>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Information Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  @click="open('Information!', 'Hey, I am Opened...', 'info')">
                Click Me!
          </button>  
        </div>     

        <div class="grid__col-3 example__title">Success Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="open('Success!', 'Hey, I am Opened...', 'success')">
                Click Me!
          </button>   
        </div>       
      </div>


      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Error Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red"
                  @click="open('Error!', 'Hey, I am Opened...', 'error')">
                Click Me!
          </button>
        </div>    

        <div class="grid__col-3 example__title">Warning Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange"
                  @click="open('Warning!', 'Hey, I am Opened...', 'warning')">
                Click Me!
          </button>    
        </div>   
      </div>


      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert Without Title</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  @click="open('', 'Hey, I am Opened, but I dont have title', '')">
                Click Me!
          </button>    
        </div>     

        <div class="grid__col-3 example__title">Alert With HTML</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange"
                  @click="openCustomHtml">
                Click Me!
          </button>   
        </div>      
      </div>


      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Custom Close Text</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="open('Custom Close Text', 'Hey, I am Opened...', '', '', 'Custom Close Text')">
                Click Me!
          </button>   
        </div>    

        <div class="grid__col-3 example__title">Alert With Custom Close Class</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  @click="open('Custom Close Class', 'Hey, I am Opened...', '', '', '', 'custom-class-btn')">
                Click Me!
          </button>   
        </div>    
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Custom Close Function</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red"
                  @click="openCustomFunction">
                Click Me!
          </button>   
        </div>   

        <div class="grid__col-3 example__title">Alert With Custom Class</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red"
                  @click="open('Custom Class', 'Hey, I am Opened...', '', '', '', '', 'custom-class')">
                Click Me!
          </button>   
        </div>     
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Custom Icon</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="open('Custom Icon', 'Hey, I am Opened...', '', '', '', '', '', 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png')">
                Click Me!
          </button>   
        </div>    

        <div class="grid__col-3 example__title">Alert With Confirm Button</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red"
                  @click="openWithConfirm('Confirm Button', 'Hey, I have Confirm Button Now', false)">
                Click Me!
          </button>   
        </div>    
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Confirm Button Custom Text</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  @click="openWithConfirm('Confirm Button Custom Text', 'Hey, I am Opened...', false, 'Custom Text Confirm')">
                Click Me!
          </button>   
        </div>  

        <div class="grid__col-3 example__title">Alert With Confirm Function</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange"
                  @click="openWithConfirm('Confirm Function', 'Click Confirm to trigger function', true)">
                Click Me!
          </button>   
        </div>    
      </div>

      <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With Confirm Button Custom Class</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  @click="openWithConfirm('Confirm Button Custom Class', 'Hey, I am Opened...', false, '', 'custom-class-btn')">
                Click Me!
          </button>   
        </div>    

        <div class="grid__col-3 example__title">Alert With Disable Overlay Click</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="openDisabledOverlayClick">
                Click Me!
          </button>   
        </div>    
      </div>

       <div class="grid__row content__row">
        <div class="grid__col-3 example__title">Alert With All Button Hidden</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange"
                  @click="openWithHiddenButton">
                Click Me!
          </button>   
        </div>    
  
        <div class="grid__col-3 example__title">Alert With Very Custom Style</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="openWithStyle">
                Click Me!
          </button>   
        </div>    

      </div>
            

    </div>


    <div class="grid__row content centered">
      <h2>Download</h2>

      <p>        
        <a href="https://www.npmjs.com/package/vue2-simplert">
          <img src="https://img.shields.io/badge/download-npmjs-red.svg?maxAge=3600" alt="vue2simplert-npmjs">
        </a>
        <br/><br/>
        <code>npm install vue2-simplert --save</code>
      </p>

      <p>        
        <a href="https://yarnpkg.com/en/package/vue2-simplert">
          <img src="https://img.shields.io/badge/download-yarn-blue.svg?maxAge=3600" alt="vue2simplert-yarnpkg">
        </a>
        <br/><br/>
        <code>yarn add vue2-simplert</code>
      </p>

      <p>
        Or download latest release <a href="https://github.com/mazipan/vue2-simplert/releases">here</a>
      </p>


      <p>        
        Current Version 
        <br/><br/>
        <a href="https://www.npmjs.com/package/vue2-simplert">
          <img src="https://img.shields.io/npm/v/vue2-simplert.svg" alt="vue2simplert-version">
        </a>
      </p>

    </div>

    <div class="grid__row content centered">
      <h2>Projects Using Vue2-Simplert</h2>

      <ul class="users">
          <li>
              <a href="https://www.blibli.com/?utm_source=mazipan-github-io&utm_medium=vue2-simplert" title="Blibli.com">
                <img src="https://www.static-src.com/resources/images/logo-blibli.png">
              </a>
          </li>
          <li>
              <a href="https://www.blibli.com/travel?utm_source=mazipan-github-io&utm_medium=vue2-simplert" title="Blibli.com Travel">
                <img src="https://www.static-src.com/travel/2.2.1/resources/hotel/images/thumbnail-blibli-travel.png">
              </a>
          </li>
          <li>
            <a class="add-button" href="https://github.com/mazipan/vue2-simplert/issues/19" title="Add your logo here">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="add-button" href="https://github.com/mazipan/vue2-simplert/issues/14" title="Share your experience">
              <i class="fa fa-comments" aria-hidden="true"></i>
            </a>
          </li>
      </ul>    

    </div>

    <div class="grid__row content centered">
      <h2>Contribute</h2>

      <p>
        Feel free to fork <i class="fa fa-code-fork"></i> Vue2-Simplert on <a href="https://github.com/mazipan/vue2-simplert"
       target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!    
      </p>      

    </div>

    <div class="grid__row content centered">
      <h2>Contact Developer</h2>

      <p>    

        <a href="https://github.com/mazipan">
          <img src="https://img.shields.io/badge/mazipan-Github-lightgrey.svg?maxAge=3600" 
            alt="Github">
        </a>

        <a href="mailto:mazipanneh@gmail.com">
          <img src="https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600" 
            alt="Email">
        </a>

        <a href="https://mazipanneh.com/blog/">
          <img src="https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600"   alt="Blog">
        </a>

        <a href="https://facebook.com/mazipanneh">
          <img src="https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600" 
            alt="Facebook">
        </a>

        <br/>

        <a href="https://twitter.com/Maz_Ipan">
          <img src="https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600" 
            alt="Twitter">
        </a>  

        <a href="https://id.linkedin.com/in/irfanmaulanamazipan">
          <img src="https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600" 
            alt="Linkedin">
        </a> 

        <a href="https://www.slideshare.net/IrfanMaulana21">
          <img src="https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600" 
            alt="Slideshare">
        </a>  
      </p>      

    </div>

    <div class="grid__row content centered">
      <p>
        Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.   
      </p>      
    </div>

    <!-- Vue2-Simplert DOM start -->
    <simplert useRadius=true
              useIcon=true
              ref="simplert">
    </simplert>

  </div>
</template>

<script>
  import Simplert from 'components/simplert'

  export default {
    components: {
      Simplert
    },
    data(){
      return{}
    },
    methods: {
      open (title, message, type, color, customCloseBtnText, customCloseBtnClass, customClass, customIconUrl) {
        let obj = {
          title: title,
          message: message,
          type: type
        }

        if (customCloseBtnText) {
          obj.customCloseBtnText = customCloseBtnText
        }

        if (customCloseBtnClass) {
          obj.customCloseBtnClass = customCloseBtnClass
        }

        if (customClass) {
          obj.customClass = customClass
        }

        if (customIconUrl) {
          obj.customIconUrl = customIconUrl
        }

        console.log('open simplert with obj : ', obj)
        this.$refs.simplert.openSimplert(obj)
      },

      openCustomHtml () {
        let obj = {
          title: 'Custom HTML',
          message: '<span style="color:red;">I am HTML</span>',
          type: 'info'
        }

        console.log('open simplert with obj : ', obj)
        this.$refs.simplert.openSimplert(obj)
      },

      onClose () {
        alert('Hey, I am Close Function')
      },

      onConfirm () {
        alert('Hey, You Confirmed')
      },

      openCustomFunction () {
        let obj = {
          title: 'Custom Function',
          message: 'Click close to trigger custom function',
          type: 'info',
          onClose: this.onClose
        }

        console.log('open simplert with obj : ', obj)
        this.$refs.simplert.openSimplert(obj)
      },

      openWithConfirm (title, message, isCustomFunction, customConfirmBtnText, customConfirmBtnClass) {
        let obj = {
          title: title,
          message: message,
          type: 'info',
          useConfirmBtn: true,          
        }

        if (isCustomFunction) {
          obj.onConfirm = this.onConfirm
        }

        if (customConfirmBtnText) {
          obj.customConfirmBtnText = customConfirmBtnText
        }

        if (customConfirmBtnClass) {
          obj.customConfirmBtnClass = customConfirmBtnClass
        }

        console.log('open simplert with obj : ', obj)
        this.$refs.simplert.openSimplert(obj)
      },

      openDisabledOverlayClick () {
        let obj = {
          title: 'Disable Overlay Click',
          message: 'Now You can not close me by clicking overlay',
          type: 'info',
          disableOverlayClick: true
        }

        console.log('open simplert with obj : ', obj)
        this.$refs.simplert.openSimplert(obj)
      },

      openWithHiddenButton () {
        let obj = {
          title: 'Hey, I am Title',
          message: 'I am Message',
          type: 'info',
          hideAllButton: true
        }

        console.log('open simplert with obj : ', obj)
        this.$refs.simplert.openSimplert(obj)
      },

      openWithStyle () {
        let obj = {
          title: 'Confirmation',
          message: 'Do you want to procced ?',
          customClass: 'custom-simplert',
          customIconUrl: '',
          customCloseBtnText: 'No, Just Close',
          customCloseBtnClass: 'no-procced-btn',
          onClose: this.onClose,
          useConfirmBtn: true,
          customConfirmBtnText: 'Yes, Procced Me',
          customConfirmBtnClass: 'procced-btn',
          onConfirm: this.onConfirm
        }

        console.log('open simplert with obj : ', obj)
        this.$refs.simplert.openSimplert(obj)        
      }

    }
  };
</script>

<style lang="scss" src="./custom-style.scss"></style>

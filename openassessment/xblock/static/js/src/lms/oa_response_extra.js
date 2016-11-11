function temp_tmce() {
    tinymce.init({
    selector: '.submission__answer__part__text__value2', 
    height: 500,
    plugins: ['advlist autolink lists link anchor'],
    menubar: false, 
    init_instance_callback: function (editor) { 
        editor.on('change', function (e) { 
            var real_text = tinymce.activeEditor.getContent({format: 'raw'}); 
                            console.log(real_text); 
                            tinymce.DOM.setHTML('submission__answer__part__text__1', real_text);
                            });
        editor.on('keyup', function (e) { 
            var real_text = tinymce.activeEditor.getContent({format: 'raw'}); 
                            console.log(real_text); 
                            tinymce.DOM.setHTML('submission__answer__part__text__1', real_text);
                            });
        editor.on('drop', function (e) { 
            var real_text = tinymce.activeEditor.getContent({format: 'raw'}); 
                            console.log(real_text); 
                            tinymce.DOM.setHTML('submission__answer__part__text__1', real_text);
                            });
        editor.on('paste', function (e) { 
            var real_text = tinymce.activeEditor.getContent({format: 'raw'}); 
                            console.log(real_text); 
                            tinymce.DOM.setHTML('submission__answer__part__text__1', real_text);
                            });                                                                                    
                        }
                    });
    }

function temp_css() {$('#submission__save').removeClass('is--disabled');}

setTimeout('temp_tmce()', 5000);
setTimeout('temp_css()', 5000);

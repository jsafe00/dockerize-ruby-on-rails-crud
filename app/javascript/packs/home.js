var ckeditor_assets = 'https://simple-rails-crud.herokuapp.com/';

CKEDITOR.plugins.addExternal( 'pbckcode', ckeditor_assets+'ckeditor/plugins/pbckcode/', 'plugin.js' );

CKEDITOR.replace( 'ckeditor', {
    skin: 'moonodark,'+ckeditor_assets+'ckeditor/skins/moonodark/',
    extraPlugins: 'pbckcode',
    toolbar: [
        [ 'Source' ], 
        [ 'clipboard', 'undo', '-', 'Cut', 'Copy', 'Paste','-', 'Undo', 'Redo', 'Preview' ],
        [ 'TextColor', 'Bold', 'Italic' ],
        [ 'Format', 'Font', 'FontSize' ],
        [ 'Image', 'Iframe' ],
        [ 'pbckcode' ]
   ]
} );

config.pbckcode = {
    js : "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/"
};
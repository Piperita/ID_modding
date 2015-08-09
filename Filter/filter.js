function circFilt(content) {
  content = content.replace('pharmacy','phar<b></b>macy'); 
  content = content.replace('viagra','via<b></b>gra'); 
  content = content.replace('cialis','cia<b></b>lis');
  return content
}
id_add_filter('pre_comment_text',circFilt);

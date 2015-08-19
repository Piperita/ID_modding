function circFilt(content) {
  content = content.replace('cialis','cia<b></b>lis');
  content = content.replace('patreon','pat<b></b>reon'); 
  content = content.replace('viagra','via<b></b>gra'); 
  content = content.replace('pharmacy','phar<b></b>macy');
  return content
}
id_add_filter('pre_comment_text',circFilt);

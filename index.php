<?php
// somewhere early in your project's loading, require the Composer autoloader
// see: http://getcomposer.org/doc/00-intro.md

//require 'vendor/autoload.php';

// disable DOMPDF's internal autoloader if you are using Composer
//define('DOMPDF_ENABLE_AUTOLOAD', false);

// include DOMPDF's default configuration
require_once '/var/www/plugin/dompdf/dompdf_config.inc.php';
echo "hello";

$htmlString = '';
ob_start();
include('html_to_pdf_test.html');
$htmlString .= ob_get_clean();


$dompdf = new DOMPDF();
$dompdf->load_html($htmlString);
$dompdf->render();
$dompdf->stream("sample.pdf");

?>
<!DOCTYPE center PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<HTML>
<head>
<title>Blue Diamond</title>
</head>
<body>
<center>
<br><br>
<img src="images/bluediamond.png" alt="Blue Diamond" align="middle">


<p>Coming Soon... &nbsp; &nbsp; &nbsp; </p>
</center>

</body>
</HTML>


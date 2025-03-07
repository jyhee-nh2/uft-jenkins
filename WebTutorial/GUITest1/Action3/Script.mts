wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set DataTable("username_value", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Check CheckPoint("safepay_username") @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "67c1a60e006aede8aa3bddcd41a0a3eae9846511259e39bf"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click



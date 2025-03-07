wait 4
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "jyhee" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Output CheckPoint("username") @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "67c17094647a8453dd1c2e47574491409709774a7728938c" @@ script infofile_;_ZIP::ssf12.xml_;_
wait 2
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Click @@ script infofile_;_ZIP::ssf13.xml_;_

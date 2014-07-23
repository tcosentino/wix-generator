wix-generator
=============

Generates component xml and guids for wix installer file

Requires:

 - Node - http://nodejs.org/

Install:

    git clone https://github.com/tcosentino/wix-generator.git
    npm install

Input:

    node wixGen.js App/Pages/AdminLocation/stopList/stopLocationTemplate.html 

Output:

    <Component Permanent="yes" Id="cmpE815AB8765B34C0B8513A7E5160F431A" Guid="{D6B83CC9-4AF3-4E4B-8B8E-16B2D031EBF4}">
        <File Id="filF9941101BD274E5DADC702AFA79D8A1C" KeyPath="yes" Source="$(var.BuildPath)\Webpages\gicore\App\Pages\AdminLocation\stopList\stopLocationTemplate.html" />
    </Component>

    <ComponentRef Id="cmpE815AB8765B34C0B8513A7E5160F431A" />    
    


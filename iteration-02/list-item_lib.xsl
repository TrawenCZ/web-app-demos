<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="library-list/list-item">
        <li class="{@class}">
            <span>
                <xsl:value-of select="title"/>
            </span>
        </li>
</xsl:template>
</xsl:stylesheet>
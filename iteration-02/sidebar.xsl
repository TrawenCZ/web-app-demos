<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    <xsl:include href="list-item_main.xsl" />
    <xsl:include href="list-item_lib.xsl" />

    <xsl:template match="sidebar">
        <aside class="{@class}">
            <h1 class="{title/@class}">
                <xsl:value-of select="title" />
            </h1>
            <nav class="{navigation/@class}">
                <ul class="{navigation/main-list/@class}">
                    <xsl:apply-templates select="navigation/main-list/list-item"/>
                </ul>
                <ul class="{navigation/library-list/@class}">
                    <xsl:apply-templates select="navigation/library-list/list-item"/>
                </ul>
            </nav>
        </aside>
    </xsl:template>
</xsl:stylesheet>
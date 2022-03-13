<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="playlist-card">
        <div class="{@class}">
            <img class="{cover-image/@class}" src="{cover-image/@src}" alt="{cover-image/@alt}" />
            <div class="{controls/@class}">
                <span class="{controls/playlist-title/@class}">
                    <xsl:value-of select="controls/playlist-title"/>
                </span>
                <button class="{controls/playlist-button/@class}">
                    <i class="{controls/playlist-button/icon/@class}" />
                </button>
            </div>
        </div>
</xsl:template>
</xsl:stylesheet>
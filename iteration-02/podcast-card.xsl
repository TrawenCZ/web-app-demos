<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="podcast-card">
        <div class="{@class}">
            <img class="{cover-image/@class}" src="{cover-image/@src}" alt="{cover-image/@alt}"/>
            <div class="{controls/@class}">
                <h2 class="{controls/podcast-title/@class}">
                    <xsl:value-of select="controls/podcast-title" />
                </h2>
                <span class="{controls/podcast-description/@class}">
                    <xsl:value-of select="controls/podcast-description" />
                </span>
            </div>
        </div>
</xsl:template>
</xsl:stylesheet>
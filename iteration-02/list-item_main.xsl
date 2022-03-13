<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="main-list/list-item">
        <xsl:if test="@active='true'">
            <li class="nav__item nav__item--active">
                <i class="{icon/@class}"></i>
                <span>
                    <xsl:value-of select="title"/>
                </span>
            </li>
        </xsl:if>
        <xsl:if test="@active='false'">
            <li class="nav__item">
                <i class="{icon/@class}"></i>
                <span>
                    <xsl:value-of select="title"/>
                </span>
            </li>
        </xsl:if>
</xsl:template>
</xsl:stylesheet>
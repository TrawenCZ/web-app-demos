<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="sidebar">
        <aside class="{@class}">
            <h1 class="{title/@class}">
                <xsl:value-of select="title" />
            </h1>
            <nav class="{navigation/@class}">
                <ul class="{navigation/main-list/@class}">
                    <xsl:for-each select="navigation/main-list/list-item">
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
                    </xsl:for-each>
                </ul>
                <ul class="{//library-list/@class}">
                    <xsl:for-each select="navigation/library-list/list-item">
                        <li class="{//library-list/list-item/@class}">
                            <span>
                                <xsl:value-of select="title"/>
                            </span>
                        </li>
                    </xsl:for-each>
                </ul>
            </nav>
        </aside>
    </xsl:template>
</xsl:stylesheet>
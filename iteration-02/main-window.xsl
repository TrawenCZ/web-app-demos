<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="main-window">
        <div class="{@class}">
            <header class="{header/@class}">
                <h2 class="{title/@class}">
                    <xsl:value-of select="header/title" />
                </h2>
            </header>
            
            <section class="{//playlists/@class}">
                <xsl:for-each select="playlists/playlist-card">
                    <div class="{//playlists/playlist-card/@class}">
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
                </xsl:for-each>
            </section>

            <section class="{//podcasts/@class}">
                <h1 class="{//podcasts/title/@class}">
                    <xsl:value-of select="//podcasts/title" />
                </h1>
                    <div class="{//podcasts/podcast-list/@class}">
                        <xsl:for-each select="//podcasts/podcast-list/podcast-card">
                            <div class="{@class}">
                                <img class="{cover-image/@class}" src="{cover-image/@src}" alt="{cover-image/@alt}"/>
                                <div class="{controls/@class}">
                                    <h2 class="{controls/podcast-title/@class}">
                                        <xsl:value-of select="controls/podcast-title" />
                                    </h2>
                                    <span class="{controls/podcast-description/@class}">
                                        <xsl:value-of select="controls/podcast-decription" />
                                    </span>
                                </div>
                            </div>
                        </xsl:for-each>
                    </div>
            </section>
        </div>
    </xsl:template>
</xsl:stylesheet>
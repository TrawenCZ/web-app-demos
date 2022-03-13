<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    <xsl:include href="playlist-card.xsl" />
    <xsl:include href="podcast-card.xsl"/>

    <xsl:template match="main-window">
        <div class="{@class}">
            <header class="{header/@class}">
                <h2 class="{header/title/@class}">
                    <xsl:value-of select="header/title" />
                </h2>
            </header>
            
            <section class="{playlists/@class}">
                <xsl:apply-templates select="playlists/playlist-card"/>
            </section>

            <section class="{podcasts/@class}">
                <h1>
                    <xsl:value-of select="podcasts/title" />
                </h1>
                    <div class="{podcasts/podcast-list/@class}">
                        <xsl:apply-templates select="podcasts/podcast-list/podcast-card" />
                    </div>
            </section>
        </div>
    </xsl:template>
</xsl:stylesheet>
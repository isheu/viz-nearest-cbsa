all: test1

test1: ; curl "http://www.nacis.org/naturalearth/50m/physical/ne_50m_land.zip" -o $@.download ; mkdir -p why
